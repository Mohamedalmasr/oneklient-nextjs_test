process.env.NODE_ENV ||= "production"

const { createServer } = require("node:http")
const next = require("next")

const hostname = process.env.HOST || "0.0.0.0"
const listenTarget = process.env.PORT || 3000
const numericPort = Number.parseInt(String(listenTarget), 10)
const nextPort = Number.isNaN(numericPort) ? 3000 : numericPort
const app = next({ dev: false, hostname, port: nextPort })
const handle = app.getRequestHandler()

async function start() {
  await app.prepare()

  const server = createServer(async (request, response) => {
    try {
      await handle(request, response)
    } catch (error) {
      console.error("Failed to handle request:", error)

      if (!response.headersSent) {
        response.statusCode = 500
        response.setHeader("Content-Type", "text/plain; charset=utf-8")
      }

      response.end("Internal Server Error")
    }
  })

  if (typeof listenTarget === "string" && !/^\d+$/.test(listenTarget)) {
    server.listen(listenTarget, () => {
      console.log("ONEklient Next.js server ready on the IIS named pipe")
    })
  } else {
    server.listen(nextPort, hostname, () => {
      console.log(`ONEklient Next.js server ready at http://${hostname}:${nextPort}`)
    })
  }
}

start().catch((error) => {
  console.error("Unable to start the Next.js server:", error)
  process.exit(1)
})
