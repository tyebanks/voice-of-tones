import * as React from 'react'
import '../styles/global.scss'
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Card from '../components/Card'

const IndexPage = () => (
    <Layout showHero={true}>
        <section className="index__wrapper">
            <h2 className="home__h2">
                {/* Featured Articles */}
                Latest Blog Posts
            </h2>
            <Card />
        </section>
    </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
