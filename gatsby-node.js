/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allWpPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        console.error(result.errors)
        throw new Error('Could not fetch posts', result.errors)
    }

    result.data.allWpPost.edges.forEach(({ node }) => {
        createPage({
            path: `/posts/${node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                id: node.id,
            },
        })
    })
}
