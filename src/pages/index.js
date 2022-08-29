import * as React from "react"
import './index.css'

import { StaticImage } from "gatsby-plugin-image";
import Background from '../components/Background';
import { PageTemplate } from './../components/PageTemplate';
import { BlogCard } from '../components/Card';
import { graphql, Link } from 'gatsby'
import { IconButton } from '../components/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from './about';
import LandingPage from './landingpage';
import Blog from './blog';

function HeartBeat() {
  return (
      <div class="heart-rate">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
           x="0px" y="0px" 
          width="150px" height="73px" viewBox="0 0 150 73" 
          enable-background="new 0 0 150 73" 
          >
          <polyline fill="none" stroke="#009B9E" stroke-width="3" 
            stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
          />
        </svg>
      <div class="fade-in"/>
      <div class="fade-out"/>
    </div>
  )
}


const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "100vh"
}

const IndexPage = ({ data}) => {
    const {allMdx: {
        nodes
        }
      } = data;

  return (
  (       <PageTemplate className="flex flex-col items-center justify-center">
            <div className="flex md:flex-row flex-col-reverse sm:flex-col justify-center items-center px-8 index-text-container">
              <div className="text-white p-4 w-3/4 text-leftc fade-in-text">
                <h1 className="text-white text-6xl font-thin pb-4 font-bold">Hi There</h1>
                <p className="text-2xl">
                I'm a <span className='font-bold'>full stack</span> software engineer whose 
                focused on <span className='font-bold'>web development </span>.
                </p>
                <br/>
                <p className="text-2xl">
                  I am always on the look out for great food.
                </p>
              </div>
            </div>
            <About/>
            <h1 className="text-white text-4xl font-thin text-center">What's New</h1>
            <div className="p-4 items-center mt-4 rounded-xl flex-col flex sm:flex-row w-fit">
              {
              nodes.map(node => (
              <li className="py-2 sm:px-1 list-none w-fit" key={node.id}>
                  <Link className="no-underline text-black" to={`/blog/${node.slug}`}>
                  <BlogCard description={node.frontmatter.description} title={node.frontmatter.title} date={node.frontmatter.date}/>
                  </Link>
              </li>
              ))
          }
          </div>
      </PageTemplate>)
    
  )
}

export const query = graphql`
  query IndexQuery {
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

export default IndexPage
