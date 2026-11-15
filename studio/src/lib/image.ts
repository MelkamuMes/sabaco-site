import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
})

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max')