import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client' // Ensure this path points to your sanity client

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}