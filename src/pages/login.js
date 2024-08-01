import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Seo from '../components/seo'
import * as styles from '../components/Login/Login.module.scss'

const LogIn = ({ serverData }) => {
    return (
        <Layout>
            <section className={styles.wrapper}>
                <div className={styles.login_panel}>
                    <div className={styles.left_image}>
                        <img
                            className={styles.login_image}
                            alt="A random unsplash"
                            src={serverData.image}
                        />
                    </div>{' '}
                    <div className={styles.right_content}>
                        <h1> Welcome back!</h1>
                        <h2> Log in</h2>
                        <input
                            type="text"
                            className={styles.textbox}
                            placeholder="  Email"
                        />
                        <input
                            type="text"
                            className={styles.textbox}
                            placeholder="  Password"
                        />
                        <a href="https://x.com">Forgot password?</a>
                        <Button text="Log Me In" />
                    </div>
                </div>
            </section>

            {/* <h1>
                This page is <b>rendered server-side</b>
            </h1>
            <p>
                 <Link to="/">Go back to the homepage</Link>
                This page is rendered server side every time the page is
                requested. Reload it to see a(nother) random photo from{' '}
                <code>dog.ceo/api/breed/shiba/images/random</code>:
            </p>
          
            <p>
                To learn more, head over to our{' '}
                <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
                    documentation about Server Side Rendering
                </a>
                .
            </p> */}
        </Layout>
    )
}

export const Head = () => <Seo title="Login" />

export default LogIn

export async function getServerData() {
    try {
        const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random'
        const ACCESS_KEY = 'eroOPv1qKhg-JUS9tI4B0IEylgHRrdOwMc703xhzA0g'

        const res = await fetch(`${UNSPLASH_API_URL}?client_id=${ACCESS_KEY}`, {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        })

        if (!res.ok) {
            throw new Error(`Response failed: ${res.statusText}`)
        }

        const data = await res.json()

        return {
            props: {
                image: data.urls.regular, // Adjust based on the API response structure
            },
        }
    } catch (error) {
        console.error('Error fetching image:', error)

        return {
            status: 500,
            headers: {},
            props: {},
        }
    }
}
