import * as React from "react"
import * as styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter, faFacebookF, faInstagram, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import authorImage from '../../images/logo.png';


const Contact = () => (
  <section className={styles.container}>
    <div className={styles.glass_card}>
      <div className={styles.image_border_container}>
        <div className={styles.image_container}>
          <img src={authorImage} alt="Author" />
        </div>
      </div>
  
      <h2>Let's get in touch!</h2>

      <div className={styles.contact_buttons}>
        <a className={styles.btn} href="mailto:toniwoodburn@hotmail.com">Email  <FontAwesomeIcon icon={faGoogle} /></a>
        <a className={styles.btn} href="https://instagram.com" target="_blank">Instagram <FontAwesomeIcon icon={faInstagram}/></a>
        <a className={styles.btn} href="https://facebook.com" target="_blank">Facebook  <FontAwesomeIcon icon={faFacebookF} /></a>
        <a className={styles.btn} href="https://x.com" target="_blank">X-Twitter  <FontAwesomeIcon icon={faXTwitter}/></a>
        <a className={styles.btn} href="https://linkedin.com" target="_blank">LinkedIn   <FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
        
  </section>
);

export default Contact;