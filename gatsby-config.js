module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "profile.woohm404.com-web-v3",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-S5E2X3FX3D",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
