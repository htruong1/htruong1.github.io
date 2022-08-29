import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PageTemplate } from '../components/PageTemplate';

function BlogPostTemplate(props)  {
    console.log(props)
    return (
        <PageTemplate>
            {/* <h1>{title}</h1>
            <p>{date}</p> */}
            {/* <MDXRenderer> */}
                {props.children}
            {/* </MDXRenderer> */}
        </PageTemplate>
    )
}

export default BlogPostTemplate;
