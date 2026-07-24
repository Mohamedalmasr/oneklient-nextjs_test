import { createReadStream, existsSync, statSync } from "node:fs"
import { createServer } from "node:http"
import { extname, join, normalize, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(fileURLToPath(new URL("../out", import.meta.url)))
const port = Number(process.env.PORT || 3000)
const configuredBasePath = (process.env.BASE_PATH || "").trim().replace(/^\/+|\/+$/g, "")
const basePath = configuredBasePath ? `/${configuredBasePath}` : ""

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

if (!existsSync(root)) {
  console.error("Missing the out directory. Run npm run build first.")
  process.exit(1)
}

function safePathname(url) {
  let decoded = decodeURIComponent(new URL(url, "http://localhost").pathname)

  if (basePath && (decoded === basePath || decoded.startsWith(`${basePath}/`))) {
    decoded = decoded.slice(basePath.length) || "/"
  }

  const clean = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "")
  return clean.replace(/^[/\\]+/, "")
}

function resolveFile(url) {
  const pathname = safePathname(url)
  const candidates = [
    join(root, pathname),
    join(root, pathname, "index.html"),
    join(root, `${pathname}.html`),
  ]

  for (const candidate of candidates) {
    if (candidate.startsWith(root) && existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate
    }
  }

  return join(root, "404.html")
}

createServer((request, response) => {
  const file = resolveFile(request.url || "/")
  const status = file.endsWith("404.html") ? 404 : 200
  const type = contentTypes[extname(file)] || "application/octet-stream"

  response.writeHead(status, {
    "Cache-Control": file.includes(`${join("_next", "static")}`) ? "public, max-age=31536000, immutable" : "no-cache",
    "Content-Type": type,
  })

  createReadStream(file).on("error", () => {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Unable to read the requested file.")
  }).pipe(response)
}).listen(port, () => {
  console.log(`ONEklient static export available at http://localhost:${port}${basePath || ""}`)
})
