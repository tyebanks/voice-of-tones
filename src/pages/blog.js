import * as React from 'react'
// import { Link } from 'gatsby'
import Category from '../components/Category'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const BlogPage = () => (
    <Layout>
        <section className="blog__wrapper">
            <h1>Blog Categories</h1>
            <Category />
            {/* <Link to="/">Go back to the homepage</Link> */}
        </section>
    </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
