
import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.scss"
import Layout from '../components/Layout'
import Seo from "../components/seo"


const links = [
 { 
    id: '1', // Unique identifier
    title: 'Hiking to Blue Mountain Peak; a complete guide! ', // Title of the blog post
    image: 'url-to-image1.jpg', // URL for the post’s image
    category: 'Hiking', // Category or tag
    readTime: '3 min read', // Estimated read time
    excerpt: "If you're looking for a new to do weekend activity, or are interested in hiking as a hobby... ", // Short summary
    url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
    },
  {
    id: '2', // Unique identifier
    title: '9 Great restaurants in Kingston Jamaica, for brunch', // Title of the blog post
    image: 'url-to-image1.jpg', // URL for the post’s image
    category: 'Restaurants and Food', // Category or tag
    readTime: '5 min read', // Estimated read time
    excerpt: 'Brunch is one of my favorite activities so whenever I can, I like to visit a new local eatery. Below are 9 of the best restaurants in Kingston, Jamaica I have visited, perfect for brunch with the fam, friends, or that special someone. Fromage tops the list. Fromage Gourmet Market...', // Short summary
    url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
  },
  {
    id: '3', // Unique identifier
    title: 'Ecotourism-all you need to know.', // Title of the blog post
    image: 'url-to-image1.jpg', // URL for the post’s image
    category: 'Two tread Travel', // Category or tag
    readTime: '4 min read', // Estimated read time
    excerpt: 'As many of you may already know, mother Earth is in shambles. By shambles, I mean forest fires, heat waves, glaciers melting, beaches disappearing, oceans rising and pigs flying. It may sound like all fun and games but the remiss actions of greedy and negligent humans have caused near irreparable damage...', // Short summary
    url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
  },
  {
id: '4', // Unique identifier
    title: 'The “extra” Ordinary- Throw all your other skincare products away!', // Title of the blog post
    image: 'url-to-image1.jpg', // URL for the post’s image
    category: 'Skincare', // Category or tag
    readTime: '5 min read', // Estimated read time
    excerpt: 'The “extra” Ordinary- Throw all your other skincare products away! MAY 6, 2021 / AFTERNOONT Whether you’ve always had skin issues or have noticed negative changes in your skin due to significant life changes (hello, COVID), you may be able to relate to what I experienced last year: a skin midlife crisis. That...', // Short summary
    url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
  },
  {
  id: '5', // Unique identifier
    title: '‘The Yellow Envelope’- why you need to read it', // Title of the blog post
    image: 'url-to-image1.jpg', // URL for the post’s image
    category: 'Books and Reading', // Category or tag
    readTime: '5 min read', // Estimated read time
    excerpt: 'As humans, we sometimes get to the desperate point of needing something deeper. Just to keep on living. Some people find themselves through their work, children, or partners. Some in charity, art, whatever it may be. Others can’t seem to find it, or have yet to find it, a constant...', // Short summary
    url: 'https://www.gatsbyjs.com/docs/tutorial', // URL to the full post
  },
]

const IndexPage = () => (
  <Layout showHero={true}>
  
    <div className="textCenter">
  
      <p className="intro">
      <h2>
      {/* Featured Articles */}
      Latest Blog Posts
      </h2>
      <br />
        {links.map((link) => (
        <div key={link.id} className="listItem">
          <h3>{link.title}</h3>
          {/* <img src={link.image} alt={link.title} /> */}
          <p>{link.category}</p>
          <p>{link.readTime}</p>
          <p>{link.excerpt}</p>
          <Link to={link.url}>Read More</Link>
        </div>
      ))}
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
