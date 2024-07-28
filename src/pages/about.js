import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
   <section className="about__wrapper">
      <h1>About Author</h1>
      <p>lorem ipsum</p>
      <Link to="/">Go back to the homepage</Link>
   </section>
  </Layout>
)

export const Head = () => <Seo title="About" />
export default AboutPage
