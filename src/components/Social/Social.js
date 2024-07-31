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
                <a className={styles.glow_btns} href={youtubeURL}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                </a>
            )}
            {tiktokURL && (
                <a className={styles.glow_btns} href={tiktokURL}>
                    <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                </a>
            )}

            {instagramURL && (
                <a className={styles.glow_btns} href={instagramURL}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                    />
                </a>
            )}

            {facebookURL && (
                <a className={styles.glow_btns} href={facebookURL}>
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        className={styles.icon}
                    />
                </a>
            )}
            {xtwitterURL && (
                <a className={styles.glow_btns} href={xtwitterURL}>
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        className={styles.icon}
                    />
                </a>
            )}

            {linkedinURL && (
                <a className={styles.glow_btns} href={linkedinURL}>
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
