# Next.js + Sanity + Cloudflare Starter

A production-ready website starter combining [Next.js](https://nextjs.org/) 16, [Sanity](https://www.sanity.io/) CMS with Visual Editing, and deployment to [Cloudflare Workers](https://workers.cloudflare.com/) via [OpenNext](https://opennext.js.org/cloudflare).

![Screenshot of Sanity Studio using Presentation Tool to do Visual Editing](/preview.png)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pedroduke/sanity-nextjs-cloudflare-starter)

> **Note:** After clicking the deploy button, you still need to configure environment variables in your Cloudflare dashboard (see [Environment Variables](#environment-variables)).

<!-- Demo link coming soon -->

## Features

- **Next.js 16 App Router** — Static site generation with incremental revalidation
- **Sanity Visual Editing** — Live preview with the [Pages navigator](https://www.npmjs.com/package/@tinloof/sanity-studio) and real-time [Live Content API](https://www.sanity.io/live)
- **Cloudflare Workers** — Edge deployment powered by [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
- **Page Builder** — Drag-and-drop page sections with Visual Editing support
- **Pathname-based routing** — Clean URL structure for pages and posts
- **AI-powered alt text** — Auto-generate image descriptions with [Sanity AI Assist](https://www.sanity.io/ai-assist)
- **Unsplash integration** — Seamless media management
- **pnpm workspaces** — Monorepo with `frontend/` and `studio/` packages

## Stack

| Layer           | Technology                            |
| --------------- | ------------------------------------- |
| Frontend        | Next.js 16, React 19, Tailwind CSS v4 |
| CMS             | Sanity v5, `@tinloof/sanity-studio`   |
| Deployment      | Cloudflare Workers via OpenNext       |
| Package manager | pnpm                                  |

## Quick Start

### 1. Clone and install

```bash
npx degit pedroduke/sanity-nextjs-cloudflare-starter my-site
cd my-site
pnpm install
```

### 2. Configure environment variables

Copy the example files and fill in your values:

```bash
cp frontend/.env.example frontend/.env.local
cp studio/.env.example studio/.env.local
```

See [Environment Variables](#environment-variables) below for what each variable does.

### 3. Run locally

```bash
pnpm dev
```

This starts both servers in parallel:

- **Frontend** → [http://localhost:3000](http://localhost:3000)
- **Studio** → [http://localhost:3333](http://localhost:3333)

### 4. Create content

In the Studio, click **+ New document** and create a `Post` or `Page`. Publish it and it will appear on the frontend immediately.

To import sample data:

```bash
pnpm run import-sample-data
```

## Deployment

### Deploy Sanity Studio

Before deploying the frontend, set `SANITY_STUDIO_PREVIEW_URL` in Sanity Manage to your Cloudflare Workers URL (e.g. `https://your-project.workers.dev`), then deploy the Studio:

```bash
cd studio && pnpm run deploy
# or
cd studio && npx sanity deploy
```

### Deploy Frontend to Cloudflare Workers

From the repo root:

```bash
cd frontend && pnpm run deploy
```

This runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy` and publishes your Next.js app as a Cloudflare Worker.

To preview locally using the Cloudflare runtime before deploying:

```bash
pnpm --filter frontend preview
```

### Invite collaborators

Open [Sanity Manage](https://www.sanity.io/manage), select your project, and click **Invite project members**.

## Environment Variables

### Frontend (`frontend/.env.local`)

| Variable                         | Required | Description                                                                 |
| -------------------------------- | -------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | ✅       | Your Sanity project ID (from [sanity.io/manage](https://sanity.io/manage))  |
| `NEXT_PUBLIC_SANITY_DATASET`     | ✅       | Dataset name, usually `production`                                          |
| `SANITY_API_READ_TOKEN`          | ✅       | Read token for draft/live content (create in Sanity Manage → API → Tokens)  |
| `NEXT_PUBLIC_SANITY_API_VERSION` | —        | API version date, defaults to latest                                        |
| `NEXT_PUBLIC_SANITY_STUDIO_URL`  | —        | Deployed Studio URL for Visual Editing, defaults to `http://localhost:3333` |

### Studio (`studio/.env.local`)

| Variable                    | Required | Description                                                                      |
| --------------------------- | -------- | -------------------------------------------------------------------------------- |
| `SANITY_STUDIO_PROJECT_ID`  | ✅       | Your Sanity project ID                                                           |
| `SANITY_STUDIO_DATASET`     | ✅       | Dataset name, usually `production`                                               |
| `SANITY_STUDIO_PREVIEW_URL` | —        | Your deployed frontend URL for live preview, defaults to `http://localhost:3000` |
| `SANITY_STUDIO_STUDIO_HOST` | —        | Custom hostname for the deployed Studio                                          |

### Cloudflare Workers (production)

Set the same frontend variables as [Secrets or Environment Variables](https://developers.cloudflare.com/workers/configuration/environment-variables/) in your Cloudflare dashboard or via `wrangler secret put`:

```bash
cd frontend
wrangler secret put SANITY_API_READ_TOKEN
```

## Project Structure

```
.
├── frontend/               # Next.js app
│   ├── app/                # App Router routes and components
│   ├── sanity/             # Sanity client, queries, and live config
│   ├── wrangler.jsonc      # Cloudflare Workers config
│   └── open-next.config.ts # OpenNext config
└── studio/                 # Sanity Studio
    └── src/schemaTypes/    # Document and object schemas
```

## Resources

- [Sanity documentation](https://www.sanity.io/docs)
- [Next.js documentation](https://nextjs.org/docs)
- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
- [Cloudflare Workers docs](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [GitHub repository](https://github.com/pedroduke/sanity-nextjs-cloudflare-starter)
- [Join the Sanity Community](https://slack.sanity.io)
