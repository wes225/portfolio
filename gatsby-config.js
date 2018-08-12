module.exports = {
  siteMetadata: {
    title: 'Ouissem Hammami',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-sass`, `gatsby-plugin-typography`, {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      } ,{
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
  }],
}