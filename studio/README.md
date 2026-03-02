# Studio — Sanity Content Studio

Sanity Studio v5 configured with Visual Editing and the [Pages navigator](https://www.npmjs.com/package/@tinloof/sanity-studio) from `@tinloof/sanity-studio`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                    | Required | Description                                                                 |
| --------------------------- | -------- | --------------------------------------------------------------------------- |
| `SANITY_STUDIO_PROJECT_ID`  | ✅       | Your Sanity project ID (from [sanity.io/manage](https://sanity.io/manage))  |
| `SANITY_STUDIO_DATASET`     | ✅       | Dataset name, usually `production`                                          |
| `SANITY_STUDIO_PREVIEW_URL` | —        | Deployed frontend URL for live preview, defaults to `http://localhost:3000` |
| `SANITY_STUDIO_STUDIO_HOST` | —        | Custom hostname for the deployed Studio (e.g. `my-project`)                 |

## Development

From the repo root (starts studio + frontend together):

```bash
pnpm dev
```

Or run the studio only:

```bash
pnpm --filter studio dev
```

Runs on [http://localhost:3333](http://localhost:3333).

## Deploy

Before deploying, set `SANITY_STUDIO_PREVIEW_URL` in [Sanity Manage](https://sanity.io/manage) → your project → **Settings → API → Environment Variables** to your deployed frontend URL (e.g. `https://your-project.workers.dev`). This allows the Presentation tool to connect to the live frontend.

Then deploy the Studio:

```bash
cd studio && pnpm run deploy
# or from the studio directory:
cd studio && npx sanity deploy
```

Your Studio will be hosted at `https://<studio-host>.sanity.studio`.

## Schema

Document types are defined in `src/schemaTypes/documents/`:

- `page.ts` — Pages with a drag-and-drop page builder
- `post.ts` — Blog posts with cover image, author, and rich text content
- `person.ts` — Authors referenced by posts
- `settings.ts` — Global site settings (title, description, footer links)

Object types used inside documents are in `src/schemaTypes/objects/`.

## Extending the Schema

To add a new document type, create a file in `src/schemaTypes/documents/` and export it from `src/schemaTypes/index.ts`. See the [Sanity schema documentation](https://www.sanity.io/docs/schema-types) for available field types.

## Resources

- [Sanity documentation](https://www.sanity.io/docs)
- [Sanity Studio plugins](https://www.sanity.io/plugins)
- [Join the Sanity Community](https://slack.sanity.io)
