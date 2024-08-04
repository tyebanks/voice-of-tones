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

    // Fetch posts for dynamic page creation
    const postResult = await graphql(`
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

    if (postResult.errors) {
        console.error('Error fetching posts:', postResult.errors)
        throw new Error('Could not fetch posts', postResult.errors)
    }

    postResult.data.allWpPost.edges.forEach(({ node }) => {
        createPage({
            path: `/posts/${node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                id: node.id,
            },
        })
    })

    // Fetch social media links (if needed for static use)
    const socialResult = await graphql(`
        query {
            wpPage(id: { eq: "cG9zdDoxNzY3" }) {
                socialMediaUrl {
                    youtube
                    tiktok
                    instagram
                    facebook
                    x
                    linkedin
                }
            }
        }
    `)

    if (socialResult.errors) {
        console.error('Error fetching social media links:', socialResult.errors)
        throw new Error(
            'Could not fetch social media links',
            socialResult.errors
        )
    }

    // Store social media links for use in your application
    // Note: Gatsby's Node API functions don't have a direct way to store global data
    // You might need to use a static query or context to make this data available

    console.log('Social Media Links:', socialResult.data.wpPage.socialMediaUrl)
}

// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const result = await graphql(`
//         query {
//             allWpPost(sort: { fields: date, order: DESC }) {
//                 edges {
//                     node {
//                         id
//                         slug
//                     }
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         console.error(result.errors)
//         throw new Error('Could not fetch posts', result.errors)
//     }

//     result.data.allWpPost.edges.forEach(({ node }) => {
//         createPage({
//             path: `/posts/${node.slug}`,
//             component: path.resolve(`./src/templates/post.js`),
//             context: {
//                 id: node.id,
//             },
//         })
//     })
// }

// // gatsby-node.js
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     // Fetch the data from the private page
//     const result = await graphql(`
//         query {
//             wpPage(id: { eq: "cG9zdDoxNzY3" }) {
//                 socialMediaUrl {
//                     youtube
//                     tiktok
//                     instagram
//                     facebook
//                     x
//                     linkedin
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         console.error('Error fetching data:', result.errors)
//         throw new Error(result.errors)
//     }

//     const socialMediaLinks = result.data.wpPage.socialMediaUrl

//     // Use the data as needed
//     console.log('Social Media Links:', socialMediaLinks)
// }
