// import React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// import Seo from '../components/seo'
// import parse from 'html-react-parser'

// const PostTemplate = ({ data: { post } }) => {
//     return (
//         <Layout>
//             <Seo title={post.title} />
//             <article>
//                 <header>
//                     <h1 itemProp="headline">{parse(post.title)}</h1>
//                 </header>

//                 {featuredImage?.fluid && (
//                     <Image
//                         fluid={featuredImage.fluid}
//                         alt={featuredImage.alt}
//                         style={{ marginBottom: 50 }}
//                     />
//                 )}
//             </article>
//         </Layout>
//     )
// }

// export default PostTemplate
import React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import parse from 'html-react-parser'

const PostTemplate = ({ data: { wpPost } }) => {
    // const featuredImage = getImage(wpPost.featuredImage?.node?.gatsbyImageData)

    return (
        <Layout>
            <Seo title={wpPost.title} />
            <article>
                <header>
                    <h1 itemProp="headline">{parse(wpPost.title)}</h1>
                </header>

                {/* {featuredImage && (
                    <GatsbyImage
                        image={featuredImage}
                        alt={wpPost.featuredImage?.node?.altText || ''}
                        style={{ marginBottom: 50 }}
                    />
                )} */}
            </article>
        </Layout>
    )
}

export default PostTemplate

export const query = graphql`
    query ($id: String!) {
        wpPost(id: { eq: $id }) {
            title
            content
        }
    }
`
