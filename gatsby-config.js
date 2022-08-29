module.exports = {
    pathPrefix: "/htruong1.github.io",
    plugins: [
        'gatsby-plugin-postcss', 
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `blog`,
            path: `${__dirname}/src/blog/`
        }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `templates`,
            path: `${__dirname}/src/templates`
        }
    },
    {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: `${__dirname}/src/templates`,
        },
      },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            defaultLayouts: {
                blog: require.resolve("./src/templates/BlogPostTemplate.js"),
                }
            }   
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    ],
    siteMetadata: {
        title: "My First Gatsby Site",
        menuLinks: [
            {
                name: 'index',
                link: '/',
            },
            // {
            //     name: 'About',
            //     link: '/about'
            // },
            {
                name: 'Portfolio',
                link: '/portfolio'
            },
            {
                name: 'Blog',
                link: '/blog'
            },
            // {
            //     name: 'Contact',
            //     link: '/contact'
            // }
        ]
    },
    flags: {
        PARALLEL_QUERY_RUNNING: true
      }
}