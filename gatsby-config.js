module.exports = {
  siteMetadata: {
    title: 'Josh Rincon | Web developer, designer | Whittier, CA',
    description:
      'A software developer with a penchant for design. Over 160 of web design and development experience. The greatest software engineer that has ever lived.',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {
    //     production: true,
    //     disable: !process.env.ANALYZE_BUNDLE_SIZE,
    //     generateStatFile: true,
    //     analyzerMode: 'static',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather Sans\:400,700,800`],
        display: 'swap',
      },
    },
  ],
};
