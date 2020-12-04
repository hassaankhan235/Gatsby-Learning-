import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default ({data}) => {
    console.log(data)
    return(
        <div>
            <Layout>
             <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
             <div>{data.allContentfulBlogPost.edges[0].node.post.raw}</div>
             </Layout>
        </div>
    )
}

export const query = graphql`
query {
    allContentfulBlogPost {
        edges {
          node {
            publishDate
            title
            post {
              raw
            }
          }
        }
      }
}
`