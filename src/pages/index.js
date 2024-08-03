// import * as React from 'react'

// import Layout from '../components/Layout'
// import Seo from '../components/seo'
// import Card from '../components/Card'
// import { graphql } from 'gatsby'

// const IndexPage = ({ data }) => {
//     const posts = data?.allWpPost?.nodes || []

//     return (
//         <Layout showHero={true}>
//             <h2 className="home__h2">Latest Blog Posts</h2>
//             <section className="index__wrapper">
//                 {posts.length > 0 ? (
//                     posts.map((post) => <Card key={post.id} post={post} />)
//                 ) : (
//                     <p>No posts available.</p>
//                 )}
//             </section>
//         </Layout>
//     )
// }

// export const query = graphql`
// query {
//     allWpPost(sort: { fields: date, order: DESC }, limit: 6) {
//         nodes {
//             id
//             title
//             excerpt
//             featuredImage {
//                 node {
//                     gatsbyImageData(layout: CONSTRAINED, width: 400) // Adjust as needed
//                     altText
//                 }
//             }
//         }
//     }
// }

// `

// export const Head = () => <Seo title="Home" />
// export default IndexPage

// src/pages/index.js
// import React from 'react'
// import Layout from '../components/Layout'
// import Seo from '../components/seo'
// import Card from '../components/Card/Card' // Import the Card component
// import { graphql } from 'gatsby'
// import parse from 'html-react-parser' // For parsing HTML content
// import { GatsbyImage } from 'gatsby-plugin-image'

// const IndexPage = ({ data }) => {
//     const posts = data.allWpPost.nodes

//     return (
//         <Layout>
//             <Seo title="Home" />
//             <h1>Welcome to My Blog</h1>
//             <section>
//                 {posts.map((post) => (
//                     <article key={post.id}>
//                         <header>
//                             <h2 itemProp="headline">{parse(post.title)}</h2>
//                         </header>
//                         {post.featuredImage?.node?.gatsbyImageData && (
//                             <GatsbyImage
//                                 image={post.featuredImage.node.gatsbyImageData}
//                                 alt={post.featuredImage.node.altText}
//                                 style={{ marginBottom: 50 }}
//                             />
//                         )}
//                         <Card post={post} />
//                     </article>
//                 ))}
//             </section>
//         </Layout>
//     )
// }

// export default IndexPage

// export const latestPostQuery = graphql`
//     query {
//       allWpPost(sort: { fields: date, order: DESC }, limit: 6) {
//         nodes {
//           id
//           title
//           slug
//           featuredImage {
//             node {
//               gatsbyImageData(layout: CONSTRAINED, width: 400) // Adjust as needed
//               altText
//             }
//           }
//         }
//       }
//     }
//   `

import '../styles/global.scss'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Card from '../components/Card/Card'

const IndexPage = ({ data }) => {
    const posts = data.allWpPost.nodes

    return (
        <Layout showHero={true}>
            <Seo title="Home" />

            <h2 className="home__h2">Latest Blog Posts</h2>
            {/* <section className="index__wrapper">
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </section> */}

            <section className="index__wrapper">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        title={post.title}
                        readTime={post.postMetadata.read_time}
                        categories={post.categories.nodes}
                        slug={post.slug}
                        date={post.date}
                        excerpt={post.excerpt}
                    />
                ))}
            </section>
        </Layout>
    )
}

export default IndexPage

export const latestPostQuery = graphql`
    query {
        allWpPost(sort: { fields: date, order: DESC }, limit: 6) {
            nodes {
                id
                title
                slug
                date(formatString: "MMMM DD, YYYY")
                excerpt
                categories {
                    nodes {
                        name
                    }
                }
                postMetadata {
                    read_time
                }
            }
        }
    }
`
