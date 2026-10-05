# Liam Thorne — Personal Website

Personal site built with **Create React App (CRA)**.

**Live:** https://liamthorne.dev

## Quick Start

```bash
npm install
npm start
```

## Deployment

The site is deployed on **Cloudflare Pages** as a static build.

| Setting                | Value           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Build output directory | `build`         |
| `NODE_VERSION`         | `22`            |

Pages serves `index.html` for unmatched paths because the project has no top-level `404.html`, so blog routes like `/blogs/<slug>` work on direct visits and refreshes.

Each static asset must be under 25 MiB, the Pages per-file limit. Host larger media, such as long videos, externally (for example on Cloudflare R2).

### Previous hosting

The site previously ran on a DigitalOcean VPS as a Docker container serving the build through Caddy. Deployment has since moved to Cloudflare Pages. The `dockerfile` and `Caddyfile` are kept for reference but are no longer used in production.
