/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
/** @type {import('gatsby').GatsbyConfig} */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Voice of Tones`,
        description: `Welcome to Voice of Tones.`,
        author: `Toni J`,
        siteUrl: `https://voiceoftones.com/`,
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: process.env.GATSBY_API_URL, // WordPress GraphQL endpoint
                schema: {
                    timeout: 30000,
                    requestConcurrency: 5, // Adjust based on your needs
                    previewRequestConcurrency: 2, // Adjust based on your needs
                },

                develop: {
                    hardCacheMediaFiles: true,
                },
            },
        },
        `gatsby-plugin-sass`, // For Sass support
        `gatsby-plugin-image`, // For optimized images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`, // Path for static images
            },
        },
        `gatsby-transformer-sharp`, // For image processing
        `gatsby-plugin-sharp`, // For optimized images
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // Path to your site icon
            },
        },
    ],
}
