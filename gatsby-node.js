// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     console.log(node, getNode, actions)
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     // const slug = createFilePath({ node, getNode, basePath: `src/pages/` })
//     const slug = path.basename(node.fileAbsolutePath, '.mdx')
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }