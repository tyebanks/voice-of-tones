// export default Footer;
import * as React from 'react'
import * as styles from './Footer.module.scss'
import Social from '../Social/Social'

const Footer = () => {
    const socialLinks = {
        youtubeURL: 'https://youtube.com',
        tiktokURL: 'https://tiktok.com',
        instagramURL: 'https://instagram.com',
        facebookURL: 'https://facebook.com',
        xtwitterURL: 'https://x.com/',
        linkedinURL: 'https://linkedin.com',
    }

    return (
        <footer className={styles.footer}>
            <Social
                youtubeURL={socialLinks.youtubeURL}
                tiktokURL={socialLinks.tiktokURL}
                instagramURL={socialLinks.instagramURL}
                facebookURL={socialLinks.facebookURL}
                xtwitterURL={socialLinks.xtwitterURL}
                linkedinURL={socialLinks.linkedinURL}
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
