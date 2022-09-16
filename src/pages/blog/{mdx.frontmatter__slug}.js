import * as React from 'react';
import { PageTemplate } from '../../components/PageTemplate';
import {graphql} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {
    console.log(data)
    const image = getImage(data.mdx.frontmatter.hero_image)
    const {mdx: {frontmatter}} = data;
    return(
        <PageTemplate>
            <div className="flex flex-col">
              <div className="py-4">
                <h1 className="text-4xl">{frontmatter.title}</h1>
                  <div className="py-4">
                    <p>{frontmatter.date}</p>
                    <p>{frontmatter.description}</p>
                  </div>
              </div>
              <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
            </div>
        </PageTemplate>
    )
}

// export const query = graphql`
//   query BlogContentQuery ($id: String) {
//     mdx(id: {eq: $id}) {
//       body
//       frontmatter {
//         title
//         date(formatString:
//            "MMMM D, YYYY")
//         description
//         hero_image_alt
//         hero_image_credit_link
//         hero_image_credit_text
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

export default BlogPost
