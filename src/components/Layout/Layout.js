/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

// import Navigation from "../Navigation/Navigation"
// import "../styles/layout.scss"
// Layout.js
// import styles from './Layout.module.scss';
// import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";           // Core imports (React, context, etc.)
// import { useStaticQuery, graphql } from "gatsby"; // Third-party libraries (Gatsby, etc.)
import * as styles from './Layout.module.scss';
 // Internal styles
import Header from '../Header';            // Internal components
import Footer from '../Footer';
import Hero from '../Hero/Hero'; // Ensure you have imported the Hero component

const Layout = ({ children, showHero })  => {
  // Remove the GraphQL query for site title since it's no longer used
  return (
    <>
      <Header/>
      {showHero && <Hero />}
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;

