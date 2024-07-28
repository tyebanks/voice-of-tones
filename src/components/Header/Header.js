// src/components/Header/Header.js

// import * as React from "react";
// import Navigation from "../Navigation";
// import { StaticImage } from "gatsby-plugin-image";
// import styles from './Header.module.scss';

// const Header = () => (
//   <header className={styles.header}>
//     <Navigation />
//     <StaticImage
//       src="../images/logo.png"
//       alt="vot logo"
//       className={styles.img}
//     />
//   </header>
// );

// export default Header;
import * as React from 'react'
import * as styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation' // Adjust path if needed
import Logo from '../Logo/Logo'

const Header = () => (
    <header className={styles.header}>
        <Navigation />
        <Logo />
    </header>
)

export default Header
