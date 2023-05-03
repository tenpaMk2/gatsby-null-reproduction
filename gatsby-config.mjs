export default {
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          breakpoints: [1024],
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024, // DON'T ERASE IT!! This value is used as base breakpoints. See [doc](https://www.gatsbyjs.com/plugins/gatsby-remark-images/) .
              linkImagesToOriginal: true,
              withWebp: false,
              withAvif: false,
              srcSetBreakpoints: [1024],
              quality: 90,
              wrapperStyle: (image) =>
                `max-width:${(image.aspectRatio * 100).toFixed(2)}vh`, // See [issue: Can't specify max-width](https://github.com/gatsbyjs/gatsby/issues/15578) .
              backgroundColor: "transparent",
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
