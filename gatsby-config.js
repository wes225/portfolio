module.exports = {
  siteMetadata: {
    title: 'Ouissem Hammami',
  }, pathPrefix: "/portfolio",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-sass`,
    `gatsby-plugin-typography`,`gatsby-plugin-polyfill-io`,
    `gatsby-transformer-json`,{
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`assign`]
      },
   }, {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }, {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    }
  ],
}