// export default Footer;
import * as React from 'react'
import * as styles from './Footer.module.scss'
import Social from '../Social/Social'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SocialMediaLinks {
            wpPage(id: { eq: "cG9zdDoxNzY3" }) {
                socialMediaUrl {
                    youtube
                    tiktok
                    instagram
                    facebook
                    x
                    linkedin
                }
            }
        }
    `)

    console.log('Data fetched:', data) // Log data to verify its structure

    const socialLinks = data.wpPage ? data.wpPage.socialMediaUrl : {}

    return (
        <footer className={styles.footer}>
            <Social
                youtube={socialLinks.youtube}
                tiktok={socialLinks.tiktok}
                instagram={socialLinks.instagram}
                facebook={socialLinks.facebook}
                x={socialLinks.x}
                linkedin={socialLinks.linkedin}
            />
            <div>
                © Copyright 2018 - {new Date().getFullYear()} ·
                voiceoftones.com · All rights reserved · Developed by &nbsp;{' '}
                <a
                    href="https://tyebanks-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    T.Ebanks
                </a>
            </div>
        </footer>
    )
}

export default Footer
