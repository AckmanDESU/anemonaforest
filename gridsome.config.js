// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
    siteName: 'Blog Personal',
    siteUrl: `https://anemona.netlify.app`,

    metadata: {
        cloudinary_url: 'https://res.cloudinary.com/ackmandesu/image/upload'
    },

    templates: {
        Post: [
            {
                path: '/:path',
                component: './src/templates/Post.vue'
            },
            {
                name: 'permalink',
                path: '/:year/:month/:id',
                component: './src/templates/Post.vue'
            }
        ]
        // Tag: '/tag/:id',
    },

    host: '0.0.0.0',
    titleTemplate: '%s - NWA',
    siteDescription: 'Vamos a morir todos',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'data/author.json',
                typeName: 'Author',
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: '_blank',
                    externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
                },
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'posts/**/*.md',
                typeName: 'Post',
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: '_blank',
                    externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
                    plugins: [
                        [
                            '@noxify/gridsome-plugin-remark-embed',
                            {
                                enabledProviders: [
                                    'Spotify',
                                    'Twitter',
                                    'Youtube',
                                ],
                            },
                        ],
                    ],
                },
            },
        },
        // {
        //     use: 'gridsome-plugin-image-cdn',
        //     options: {
        //         site: {
        //             baseUrl: 'https://nemona.netlify.app'
        //         },
        //         cdn: {
        //             baseUrl: 'https://res.cloudinary.com/ackmandesu',
        //             preset: 'cloudinary',
        //             imagePrefix: '',
        //         },
        //         types: [
        //             {
        //                 typeName: 'CDN_Media',
        //                 sourceField: 'sourceUrl'
        //             }
        //         ]
        //     }
        // },
    ],
    transformers: {
        remark: {
            plugins: ['@gridsome/remark-prismjs'],
        },
    },
}
