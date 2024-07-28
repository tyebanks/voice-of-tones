// export default Footer;
import * as React from "react";
import * as styles from './Footer.module.scss';
import Social from '../Social/Social'; 

const Footer = () => (
  <footer className={styles.footer}>
  <Social/>
  <div>
  © Copyright 2018 - {new Date().getFullYear()} · voiceoftones.com · All rights reserved · Developed by &nbsp; {" "} <a href="https://tyebanks-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">T.Ebanks</a>
  </div>
  </footer>
);

export default Footer;

