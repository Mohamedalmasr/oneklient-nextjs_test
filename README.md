# ONEklient dashboard conversion

A responsive rebuild of the supplied ONEklient portal using:

- Next.js 16 App Router and TypeScript
- Tailwind CSS v4
- shadcn/ui-style components powered by Radix UI
- Lucide icons
- Static export support for an existing Apache/static-host deployment

The project preserves the source portal's main information architecture: Home, CRM, Accounting, Documents, and the Real Estate Brokerage team workspace. It also supplies polished starter screens for each route so backend services can be connected without redesigning the shell.

## Design preview

![Desktop dashboard preview](docs/preview-desktop.png)

A mobile preview is included at `docs/preview-mobile.png`.

## Included routes

| Route | Purpose |
| --- | --- |
| `/` | Home dashboard with module and team cards |
| `/crm/` | CRM dashboard, services, account intake, and customer-document entry points |
| `/accounting/` | Accounting dashboard shell and integration-ready workspaces |
| `/documents/` | Defaults, keywords, folder browser, and upload interface |
| `/teams/real-estate/` | Real Estate Brokerage members, roles, and services |

## Requirements

- Node.js 20.9 or newer
- npm 10 or another current package manager

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production static export

```bash
npm run build
npm start
```

`next build` writes the deployable site to `out/`. The included dependency-free static server exposes that folder at `http://localhost:3000` for local review.

## Deploy below `/Teams/`

The current legacy portal is located below a `/Teams/` path. Build the project with that base path so generated asset and navigation URLs are correct:

macOS/Linux:

```bash
BASE_PATH=/Teams npm run build
BASE_PATH=/Teams npm start
```

Windows PowerShell:

```powershell
$env:BASE_PATH="/Teams"
npm run build
$env:BASE_PATH="/Teams"
npm start
```

Publish the contents of `out/` as the `/Teams/` directory on the web server. The rebuilt app uses clean routes such as `/Teams/crm/`. An Apache `.htaccess` file is included in `public/` so the static export redirects the current legacy `.html` paths to their replacement routes.

Included Apache redirects:

```apacheconf
RewriteEngine On
RewriteRule ^home1\.html$ ./ [R=301,L]
RewriteRule ^crm\.html$ crm/ [R=301,L]
RewriteRule ^accounting\.html$ accounting/ [R=301,L]
RewriteRule ^documents\.html$ documents/ [R=301,L]
RewriteRule ^services2\.html$ teams/real-estate/ [R=301,L]
```

## Where to connect application logic

- Replace the presentation-only account menu actions in `components/app-header.tsx` with your authentication routes.
- Connect CRM forms and activity data in `app/crm/page.tsx`.
- Connect verified ledger data in `app/accounting/page.tsx`.
- Wire document defaults, search, folders, and upload handlers in `app/documents/page.tsx`.
- Replace sample team values and role entries in `app/teams/real-estate/page.tsx`.

## Design system

Brand tokens live in `app/globals.css`. The main values are:

```css
--brand-blue: #0759ae;
--brand-blue-deep: #063f82;
--brand-teal: #0aa5a5;
--brand-teal-deep: #087f82;
--brand-ink: #17263d;
--brand-surface: #f4f7fb;
```

Reusable primitives are in `components/ui/`, while portal-specific components are in `components/`.

## Notes

- The app is intentionally backend-agnostic. Buttons and form surfaces that need APIs are clearly isolated for integration.
- Static export is enabled in `next.config.ts`. Remove `output: "export"` when server actions, route handlers, or other server-only Next.js features are introduced.
- Replace `public/oneklient-logo.png` with your approved production logo asset when necessary.
