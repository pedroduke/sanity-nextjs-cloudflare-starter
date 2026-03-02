import { SanityImage as SanityImageComponent, type WrapperProps } from 'sanity-image'

import { dataset, projectId } from '@/sanity/lib/api'

export const SanityImage = <T extends React.ElementType = 'img'>(props: WrapperProps<T>) => (
  <SanityImageComponent
    baseUrl={`https://cdn.sanity.io/images/${projectId}/${dataset}/`}
    {...props}
  />
)
