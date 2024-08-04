// import Layout from "../components/Layout/Layout"

import * as React from 'react'
import Layout from '../components/Layout' // Adjust the import based on your file structure
import Seo from '../components/seo' // Adjust the import based on your file structure
import Contact from '../components/Contact'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => {
    const page = data.wpPage

    if (!page) return <div>No data found</div>

    // Extract headings from content
    const h1 = page.content.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] || ''
    const h2 = page.content.match(/<h2[^>]*>(.*?)<\/h2>/)?.[1] || ''

    return (
        <Layout>
            <section className="contact__wrapper">
                <h1>{h1}</h1>
                <Contact h2={h2} />
            </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        wpPage(id: { eq: "cG9zdDo3Ng==" }) {
            content
        }
    }
`

export const Head = () => <Seo title="Contact" />
export default ContactPage
