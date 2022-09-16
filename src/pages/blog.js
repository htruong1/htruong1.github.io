import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { PageTemplate } from './../components/PageTemplate';
import { BlogCard } from '../components/Card';

const Blog = ({data}) => {
  
  const {allMdx: {
    nodes
    }
  } = data;
  console.log(nodes)
  return (
    <PageTemplate>
    <title>Blog</title>
    <div className="flex flex-col items-center p-4 w-full">
      <h1 className="text-4xl text-white">Blog Posts</h1>
      <p className="p-4 text-center">Here you can find an archive of my blog posts.</p>
      <ul className="flex flex-wrap sm:flex-row flex-col ">
      {
        nodes.map(node => (
          <li className="p-2" key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <BlogCard description={node.frontmatter.description} title={node.frontmatter.title} date={node.frontmatter.date}/>
            </Link>
          </li>
        ))
      }
      </ul>
      </div>
    </PageTemplate>

  )
}

// export const query = graphql`
//   query BlogQuery {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//       nodes {
//         id
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           description
//           slug
//         }
//       }
//     }
//   }
// `


export default Blog
