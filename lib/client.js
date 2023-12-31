import saintyClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = saintyClient({
    projectId: 'ztou4dvi',
    dataset: 'production',
    apiVersion: '2022-07-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)