import * as React from 'react'
import { graphql } from 'gatsby'
import { PageTemplate } from './../components/PageTemplate';

const Blog = ({}) => {
  return (
    <PageTemplate>
      Hello
    </PageTemplate>
  )
}

export const query = graphql`
  query BlogPosts($title: String) {
    mdx(title: {eq: $title}) {
      title
    }
  }
`

export default Blog
