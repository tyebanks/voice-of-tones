import * as React from 'react'
import * as styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
    faXTwitter,
    faFacebookF,
    faInstagram,
    faLinkedin,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons'
// import authorImage from '../../images/logo.png'

const Contact = ({
    h2,
    contactPageImage, // Updated prop name
    emailButton,
    instagramButton,
    facebookButton,
    xtwitterButton,
    linkedinButton,
}) => {
    // Debugging line to check the structure of the contactPageImage object
    console.log('Contact Page Image prop:', contactPageImage)

    const { sourceUrl = '', altText = '' } = contactPageImage?.node || {}

    return (
        <section className={styles.container}>
            <div className={styles.glass_card}>
                <div className={styles.image_border_container}>
                    <div className={styles.image_container}>
                        <img src={sourceUrl} alt={altText} />
                    </div>
                </div>

                <h2 className={styles.subtitle}>{h2}</h2>

                <div className={styles.contact_buttons}>
                    <a className={styles.btn} href={`mailto:${emailButton}`}>
                        Email <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a
                        className={styles.btn}
                        href={instagramButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        className={styles.btn}
                        href={facebookButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                        className={styles.btn}
                        href={xtwitterButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        X-Twitter <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a
                        className={styles.btn}
                        href={linkedinButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact

// const Contact = ({
//     h2,
//     image,
//     emailButton,
//     instagramButton,
//     facebookButton,
//     xtwitterButton,
//     linkedinButton,
// }) => {
//     console.log('Image prop:', image) /// Check the structure of the image object

//     // Destructure image data
//     const { sourceUrl = '', altText = '' } = image || {}

//     return (
//         <section className={styles.container}>
//             <div className={styles.glass_card}>
//                 <div className={styles.image_border_container}>
//                     <div className={styles.image_container}>
//                         <img src={sourceUrl} alt={altText} />
//                     </div>
//                 </div>

//                 <h2 className={styles.subtitle}>{h2}</h2>

//                 <div className={styles.contact_buttons}>
//                     <a className={styles.btn} href={`mailto:${emailButton}`}>
//                         Email <FontAwesomeIcon icon={faGoogle} />
//                     </a>
//                     <a
//                         className={styles.btn}
//                         href={instagramButton}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Instagram <FontAwesomeIcon icon={faInstagram} />
//                     </a>
//                     <a
//                         className={styles.btn}
//                         href={facebookButton}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Facebook <FontAwesomeIcon icon={faFacebookF} />
//                     </a>
//                     <a
//                         className={styles.btn}
//                         href={xtwitterButton}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         X-Twitter <FontAwesomeIcon icon={faXTwitter} />
//                     </a>
//                     <a
//                         className={styles.btn}
//                         href={linkedinButton}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         LinkedIn <FontAwesomeIcon icon={faLinkedin} />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Contact
