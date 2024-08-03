// export default Social;
import * as React from 'react'
import * as styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
    faTiktok,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
const Social = ({
    youtubeURL,
    tiktokURL,
    instagramURL,
    facebookURL,
    xtwitterURL,
    linkedinURL,
}) => {
    return (
        <section className={styles.socials}>
            {youtubeURL && (
                <a
                    className={styles.glow_btns}
                    href={youtubeURL}
                    aria-label="Youtube"
                >
                    <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                </a>
            )}
            {tiktokURL && (
                <a
                    className={styles.glow_btns}
                    href={tiktokURL}
                    aria-label="TikTok"
                >
                    <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                </a>
            )}

            {instagramURL && (
                <a
                    className={styles.glow_btns}
                    href={instagramURL}
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                    />
                </a>
            )}

            {facebookURL && (
                <a
                    className={styles.glow_btns}
                    href={facebookURL}
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        className={styles.icon}
                    />
                </a>
            )}
            {xtwitterURL && (
                <a
                    className={styles.glow_btns}
                    href={xtwitterURL}
                    aria-label="X/Twitter"
                >
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className={styles.icon}
                    />
                </a>
            )}

            {linkedinURL && (
                <a
                    className={styles.glow_btns}
                    href={linkedinURL}
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.icon}
                    />
                </a>
            )}
        </section>
    )
}

export default Social
