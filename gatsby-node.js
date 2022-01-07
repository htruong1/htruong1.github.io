exports.createPages = ({actions}) => {
    const {createPage} = actions;

    const posts = [
        {
            urlName: "chicken4you",
            restaurantName: "Chicken 4 You",
            cuisine: ["korean", "fried chicken"]
        },
    ]

    posts.forEach((post) => {
        createPage({
            path: `/blog/${post.urlName}`,
            component: require.resolve(`./src/templates/food-template.js`),
            context: {post},
            title: `${post.restaurantName} Review (1st Post!!)`
        })
    })
}