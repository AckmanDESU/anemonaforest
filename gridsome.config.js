// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
    siteName: 'Blog Personal',
    siteUrl: `https://anemona.netlify.app`,

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
                    // plugins: [
                    //     [
                    //         '@noxify/gridsome-plugin-remark-embed',
                    //         {
                    //             enabledProviders: [
                    //                 'Spotify',
                    //                 'Twitter',
                    //                 'Youtube',
                    //             ],
                    //         },
                    //     ],
                    // ],
                },
            },
        },
    ],
    transformers: {
        remark: {
            plugins: ['@gridsome/remark-prismjs'],
        },
    },
}
