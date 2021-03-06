module.exports = {
  pathPrefix: "/rev-ssob-gnuoy",
  siteMetadata: {
    title: "Lin",
    siteUrl: "https://ntr1994.github.io",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book`,
        path: `${__dirname}/content`,
        ignore: [
          "**/*.png",
          "**/*.jpg",
          "**/*.jpeg",
          "**/*.webp",
          "**/.gitkeep",
        ],
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "Json",
      },
    },
  ],
};
