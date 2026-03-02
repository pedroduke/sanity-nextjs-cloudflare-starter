/**
 * This config is used to configure your Sanity Studio.
 * Learn more: https://www.sanity.io/docs/configuration
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { structure } from './src/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { assist } from '@sanity/assist'
import { pages } from '@tinloof/sanity-studio'
import { withExtends } from '@tinloof/sanity-extends'
import { defineDocuments, defineLocations } from 'sanity/presentation'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// URL for preview functionality, defaults to localhost:3000 if not set
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL

// Configure how documents map to frontend routes for Presentation tool
const locations = {
  page: defineLocations({
    select: { title: 'name', pathname: 'pathname.current' },
    resolve: (doc: any) => {
      if (!doc || !doc.pathname) return { locations: [] }
      return {
        locations: [{ title: doc.title || 'Untitled', href: doc.pathname }],
      }
    },
  }),
  post: defineLocations({
    select: { title: 'title', pathname: 'pathname.current' },
    resolve: (doc: any) => {
      if (!doc || !doc.pathname) return { locations: [] }
      return {
        locations: [{ title: doc.title || 'Untitled', href: doc.pathname }],
      }
    },
  }),
}

// Configure which documents should open by default when navigating to a URL
const mainDocuments = defineDocuments([
  {
    route: '/:slug',
    filter: `_type == "page" && pathname.current == "/" + $slug`,
  },
  {
    route: '/posts/:slug',
    filter: `_type == "post" && pathname.current == "/posts/" + $slug`,
  },
])

// Main Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'Sanity + Next.js + Cloudflare Starter',

  projectId,
  dataset,

  // Schema configuration, imported from ./src/schemaTypes/index.ts
  schema: {
    types: withExtends(schemaTypes),
  },

  plugins: [
    // Presentation tool configuration for Visual Editing
    pages({
      resolve: { locations, mainDocuments },
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      allowOrigins: [],
      creatablePages: ['page', 'post'],
      folders: {
        '/': {
          title: 'Home',
        },
        '/posts': {
          title: 'Posts',
        },
      },
    }),
    structureTool({
      structure, // Custom studio structure configuration, imported from ./src/structure.ts
    }),
    // Additional plugins for enhanced functionality
    unsplashImageAsset(),
    assist(),
    visionTool(),
  ],
})
