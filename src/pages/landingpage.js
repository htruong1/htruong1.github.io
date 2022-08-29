import * as React from 'react';
import { BlogCard } from '../components/Card';
import { graphql, Link } from 'gatsby'

const LandingPage = (props) => {
    console.log(props)
    // const {allMdx: {
    //     nodes
    //     }
    //   } = data;

    return(
        <>
            <div className="flex md:flex-row flex-col-reverse sm:flex-col justify-center items-center p-8">
                <div className="text-white text-center p-4 w-3/4">
                    <h1 className="text-white text-6xl font-thin pb-4 text-center">Hi There</h1>
                    <p style={{animationDelay: "300ms"}} className="text-2xl">
                    My name is <span className="font-bold">Henry Truong</span>.
                    <br/>
                    I'm a <span className='font-bold'>full stack</span> software engineer whose always on the look out for
                    great food.
                    </p>
                </div>
                </div>
                <div className="py-8 flex justify-center flex-col items-center max-w-full">
                <h1 className="text-white text-4xl font-thin text-center">What's New</h1>
                <div className="p-4 items-center mt-4 rounded-xl flex-col flex sm:flex-row w-fit">
                    {/* {
                    nodes.map(node => (
                    <li className="py-2 sm:px-1 list-none w-fit" key={node.id}>
                        <Link className="no-underline text-black" to={`/blog/${node.slug}`}>
                        <BlogCard description={node.frontmatter.description} title={node.frontmatter.title} date={node.frontmatter.date}/>
                        </Link>
                    </li>
                    ))
                } */}
                </div>
            </div>
        </>
        )
}

export const query = graphql`
  query LandingPageQuery {
    allMdx(limit:3 ,sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
      }
    }
  }
`

export default LandingPage
