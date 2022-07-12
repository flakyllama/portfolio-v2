module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [ 
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: 'src/images/favicon.svg',
      },
    },
    `gatsby-plugin-sass`],
}
