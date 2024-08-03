// src/components/Card/Card.js

import * as React from 'react'
import * as styles from './Card.module.scss'
import Button from '../Button/Button'
import parse from 'html-react-parser'

// import { Link } from 'gatsby'

// Function to truncate text
const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text
}
const Card = ({
    title,
    slug,
    date,
    readTime,
    categories,
    excerpt,
    content,
    featuredImage,
}) => {
    // Function to truncate text safely
    const truncateText = (text, length) => {
        if (!text) return '' // Return an empty string if text is undefined or null
        return text.length > length ? text.slice(0, length) + '...' : text
    }

    // Use excerpt if available, otherwise fallback to truncated content
    const excerptText = excerpt || truncateText(content, 150)

    // Extract category names if they exist
    const categoryNames = categories.map((category) => category.name).join(', ')

    return (
        <article className={styles.card}>
            {featuredImage && (
                <section className={styles.card_image}>
                    <img
                        src={featuredImage.node.sourceUrl}
                        alt={featuredImage.node.altText}
                    />
                </section>
            )}
            <section className={styles.card_title}>
                <h2>{title}</h2>
            </section>
            <section className={styles.util_info}>
                <p>{date}</p>
            </section>
            <section className={styles.post_info}>
                <p className={styles.card_tag}>{categoryNames}</p>
                <p className={styles.card_readtime}>{readTime} mins</p>
            </section>
            <section className={styles.card_excerpt}>
                <p className={styles.truncate}>{parse(excerptText)}</p>
            </section>
            <section className={styles.button}>
                <Button text="Read More" to={`/posts/${slug}`} />
            </section>
        </article>
    )
}

export default Card

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'

// import * as React from 'react'
// import * as styles from './Card.module.scss'
// import Button from '../Button/Button'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'

// const Card = ({ post }) => {
//     const image = getImage(post.featuredImage.node.gatsbyImageData) // Use gatsbyImageData

//     return (
//         <article className={styles.card}>
//             <GatsbyImage
//                 image={image}
//                 alt={post.featuredImage.node.altText}
//                 className={styles.card_image}
//             />
//             <section className={styles.post_info}>
//                 <p className={styles.card_tag}>{post.tag || 'Tag'}</p>
//             </section>
//             <section className={styles.card_title}>
//                 <h2>{post.title}</h2>
//             </section>
//             <section className={styles.card_excerpt}>
//                 <p>{post.excerpt}</p>
//             </section>
//             <section className={styles.button}>
//                 <Link to={`/blog/${post.slug}`}>
//                     <Button text="Read More" />
//                 </Link>
//             </section>
//         </article>
//     )
// }

// export default Card

// import * as React from 'react'
// import * as styles from './Card.module.scss'
// import Button from '../Button/Button'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { Link } from 'gatsby'
// // import { calculateReadTime } from '../../utils/readTime'

// const Card = ({ post }) => {
//     const image = getImage(post.featuredImage.node.sourceUrl) // Get the image for GatsbyImage

//     return (
//         <article className={styles.card}>
//             <GatsbyImage
//                 image={image}
//                 alt={post.featuredImage.node.altText}
//                 className={styles.card_image}
//             />
//

//             <section className={styles.card_title}>
//                 <h2>{post.title}</h2>
//             </section>
//             <section className={styles.card_excerpt}>
//                 <p>{post.excerpt}</p>
//             </section>
//             <section className={styles.button}>
//                 <Link to={`/blog/${post.slug}`}>
//                     <Button text="Read More" />
//                 </Link>
//             </section>
//         </article>
//     )
// }

// export default Card

// // src/components/Card/Card.js

// import * as React from 'react'
// import * as styles from './Card.module.scss'
// import Button from '../Button/Button'
// // import { Link } from 'gatsby'

// import hikeImage from '../../images/hike.jpg'
// import brunchImage from '../../images/brunch.jpg'
// import ecoImage from '../../images/ecotourism.jpg'
// import ordinaryImage from '../../images/theordinary.jpg'
// import bookImage from '../../images/yellowbook.jpg'
// import fallsImage from '../../images/waterfall.jpg'

// const posts = [
//     {
//         id: '1', // Unique identifier
//         title: 'Hiking to Blue Mountain Peak; a complete guide! ', // Title of the blog post
//         image: hikeImage, // URL for the post’s image
//         tag: 'Hike', // Category or tag
//         readTime: '3 min', // Estimated read time
//         excerpt:
//             "If you're looking for a new to do weekend activity, or are interested in hiking as a hobby... ", // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
//     {
//         id: '2', // Unique identifier
//         title: '9 Great restaurants in Kingston Jamaica, for brunch', // Title of the blog post
//         image: brunchImage, // URL for the post’s image
//         tag: 'Restaurants and Food', // Category or tag
//         readTime: '5 min', // Estimated read time
//         excerpt:
//             'Brunch is one of my favorite activities so whenever I can, I like to visit a new local eatery...', // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
//     {
//         id: '3', // Unique identifier
//         title: 'Ecotourism-all you need to know.', // Title of the blog post
//         image: ecoImage, // URL for the post’s image
//         tag: 'Two tread Travel', // Category or tag
//         readTime: '4 min', // Estimated read time
//         excerpt:
//             'As many of you may already know, mother Earth is in shambles. By shambles, I mean forest fires...', // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
//     {
//         id: '4', // Unique identifier
//         title: 'The “extra” Ordinary- Throw all your other skincare products away...', // Title of the blog post
//         image: ordinaryImage, // URL for the post’s image
//         tag: 'Skincare', // Category or tag
//         readTime: '5 min', // Estimated read time
//         excerpt:
//             'The “extra” Ordinary- Throw all your other skincare products away! Whether you’ve always had skin...', // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
//     {
//         id: '5', // Unique identifier
//         title: '‘The Yellow Envelope’- why you need to read it', // Title of the blog post
//         image: bookImage, // URL for the post’s image
//         tag: 'Books and Reading', // Category or tag
//         readTime: '5 min', // Estimated read time
//         excerpt:
//             'As humans, we sometimes get to the desperate point of needing something deeper. Just to...', // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
//     {
//         id: '6', // Unique identifier
//         title: '‘Two of the most impressive waterfalls in Jamaica ', // Title of the blog post
//         image: fallsImage, // URL for the post’s image
//         tag: 'Waterfalls', // Category or tag
//         readTime: '5 min', // Estimated read time
//         excerpt:
//             'This is honestly a beautiful waterfall and the best one I’ve visited in Jamaica thus far. Not only for its...', // Short summary
//         url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
//     },
// ]

// const Card = () => (
//     <section className={styles.card_wrapper}>
//         {posts.map((post) => (
//             <article key={post.id} className={styles.card}>
//                 <img
//                     src={post.image}
//                     alt="post header"
//                     className={styles.card_image}
//                 />
//                 <section className={styles.post_info}>
//                     <p className={styles.card_tag}>{post.tag}</p>
//                     <p className={styles.card_readtime}>{post.readTime}</p>{' '}
//                 </section>

//                 <section className={styles.card_title}>
//                     <h2>{post.title}</h2>
//                 </section>
//                 <section className={styles.card_excerpt}>
//                     <p>{post.excerpt}</p>
//                 </section>
//
//             </article>
//         ))}
//     </section>
// )

// // posts.map((post) => (
// //     <div key={post.id} className="listItem">
// //         <h3>{post.title}</h3>

// //         <p>{post.category}</p>
// //         <p>{post.readTime}</p>
// //         <p>{post.excerpt}</p>
// //         <Link to={post.url}>Read More</Link>
// //     </div>
// // ))

// export default Card
