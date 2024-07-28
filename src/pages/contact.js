// import Layout from "../components/Layout/Layout"

import * as React from 'react'
import Layout from '../components/Layout' // Adjust the import based on your file structure
import Seo from '../components/seo' // Adjust the import based on your file structure
import Contact from '../components/Contact'

const ContactPage = () => (
    <Layout>
        <section className="contact__wrapper">
            <h1>Contact Tones</h1>
            <Contact />
        </section>
    </Layout>
)

export const Head = () => <Seo title="Contact" />
export default ContactPage
