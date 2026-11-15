import { defineField, defineType } from "sanity";

export const post = defineType({
    name: 'post',
    title: 'blog post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: "Title",
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: "Slug",
            type: 'slug',
            options: {source: "title", maxLength: 96},
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: "Main Image",
            type: 'image',
            options: {hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    description: 'Important for accessibility.',
                }),
            ],
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'person'}],
        }),
        defineField({
            name: 'publishedAt',
            title: "Published At",
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'body',
            title: "Body",
            type: 'array',
            of: [{type: 'block'}],
        }),
    ],
});