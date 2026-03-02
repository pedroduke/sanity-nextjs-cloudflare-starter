import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'
import { definePathname } from '@tinloof/sanity-studio'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    definePathname({
      name: 'pathname',
      options: {
        source: 'name',
        autoNavigate: true,
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [{ type: 'callToAction' }, { type: 'infoSection' }],
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: schemaTypeName =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
})
