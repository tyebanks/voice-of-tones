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

    // Extract ACF data
    const {
        contactPageImage,
        emailButton,
        instagramButton,
        facebookButton,
        xtwitterButton,
        linkedinButton,
    } = page.contactpage

    return (
        <Layout>
            <section className="contact__wrapper">
                <h1>{h1}</h1>
                <Contact
                    h2={h2}
                    contactPageImage={contactPageImage} // Ensure correct prop name
                    emailButton={emailButton}
                    instagramButton={instagramButton}
                    facebookButton={facebookButton}
                    xtwitterButton={xtwitterButton}
                    linkedinButton={linkedinButton}
                />
            </section>
        </Layout>
    )
}

export const query = graphql`
    query ContactPageData {
        wpPage(id: { eq: "cG9zdDo3Ng==" }) {
            content
            contactpage {
                contactPageImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
                emailButton
                instagramButton
                facebookButton
                xtwitterButton
                linkedinButton
            }
        }
    }
`
export const Head = () => <Seo title="Contact" />
export default ContactPage
