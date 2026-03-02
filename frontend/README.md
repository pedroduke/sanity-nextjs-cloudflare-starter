# Frontend — Next.js + Cloudflare Workers

Next.js 16 App Router frontend, deployed to [Cloudflare Workers](https://workers.cloudflare.com/) via [OpenNext](https://opennext.js.org/cloudflare).

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pedroduke/sanity-nextjs-cloudflare-starter)

> **Note:** After clicking the deploy button, you still need to configure environment variables in your Cloudflare dashboard (see [Environment Variables](#environment-variables)).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                         | Required | Description                                              |
| -------------------------------- | -------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | ✅       | Your Sanity project ID                                   |
| `NEXT_PUBLIC_SANITY_DATASET`     | ✅       | Dataset name, usually `production`                       |
| `SANITY_API_READ_TOKEN`          | ✅       | Read token from Sanity Manage → API → Tokens             |
| `NEXT_PUBLIC_SANITY_API_VERSION` | —        | API version date, defaults to latest                     |
| `NEXT_PUBLIC_SANITY_STUDIO_URL`  | —        | Deployed Studio URL, defaults to `http://localhost:3333` |

## Development

From the repo root (starts frontend + studio together):

```bash
pnpm dev
```

Or run the frontend only:

```bash
pnpm --filter frontend dev
```

Runs on [http://localhost:3000](http://localhost:3000).

## Type Generation

Sanity TypeScript types are auto-generated from the studio schema before every `dev` and `build`:

```bash
pnpm --filter frontend run typegen
```

## Build

Standard Next.js build (used locally or on CI):

```bash
pnpm --filter frontend build
```

## Deploy to Cloudflare Workers

Build with OpenNext and deploy in one command:

```bash
cd frontend && pnpm run deploy
```

This runs:

1. `opennextjs-cloudflare build` — bundles the app for the Cloudflare runtime
2. `opennextjs-cloudflare deploy` — pushes to Cloudflare Workers via Wrangler

### Preview locally with the Cloudflare runtime

Before deploying, you can test the Cloudflare build locally with [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
pnpm --filter frontend preview
```

### Set production secrets

Sensitive variables (`SANITY_API_READ_TOKEN`) should be set as Cloudflare secrets rather than plain environment variables:

```bash
cd frontend
wrangler secret put SANITY_API_READ_TOKEN
```

Public variables (`NEXT_PUBLIC_*`) can be set in the Cloudflare dashboard under **Workers → Settings → Variables**.

## Wrangler Configuration

See [`wrangler.jsonc`](./wrangler.jsonc) for the Cloudflare Workers binding configuration. Update the `name` field to match your Cloudflare Worker name.

## Cloudflare Types

To regenerate the Cloudflare environment interface (after updating `wrangler.jsonc`):

```bash
pnpm --filter frontend run cf-typegen
```
