module.exports = {
    plugins: ['gatsby-plugin-postcss', {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `blog`,
            path: `${dirname}/src/blog`
        }
    }],
    siteMetadata: {
        menuLinks: [
            {
                name: 'index',
                link: '/',
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Portfolio',
                link: '/portfolio'
            },
            {
                name: 'Blog',
                link: '/blog'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ]
    }
}