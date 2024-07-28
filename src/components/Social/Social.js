// export default Social;
import * as React from "react";
import * as styles from './Social.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebookF, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Social = () => (
      <section className={styles.socials}>
        <ul>
          <li>
            <a className={styles.glow} href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className={styles.glow} href="https://www.tiktok.com/@oftones_">
              <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className={styles.glow} href="https://www.instagram.com/oftones_/">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className={styles.glow} href="https://www.facebook.com/people/Toni-Woodburn/100092261086687">
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className={styles.glow} href="https://x.com/">
              <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
            </a>
          </li>
          <li>
            <a className={styles.glow} href="https://jm.linkedin.com/in/toniwoodburn-97b925191">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </li>     
        </ul>
      </section>
    );
    
    export default Social;
    