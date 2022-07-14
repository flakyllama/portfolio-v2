module.exports = {
  siteMetadata: {
    siteUrl: `https://www.fardeenchowdhury.ca`,
  },
  plugins: [ 
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-MCVXYSS2YZ" // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true, 
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/favicon.svg',
      },
    },
    `gatsby-plugin-sass`],
}
