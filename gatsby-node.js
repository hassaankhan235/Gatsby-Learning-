exports.createPages = async function({graphql, actions}) {
    const query = await graphql( `
    query{
        allContentfulBlogPost {
            edges {
              node {
                title
                parent {
                  id
                }
                post {
                  raw
                }
                publishDate
              }
            }
            nodes {
              post {
                raw
              }
            }
          }
    }
    `)
    const posts = query.data.allContentfulBlogPost.edges

    posts.map((post) => {
        actions.createPage({
            path: post.node.title,
            component: require.resolve('./src/template/blog-post.tsx'),
            context: post.node
        })
    })
}
