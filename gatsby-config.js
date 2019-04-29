module.exports = {
  siteMetadata: {
    title: `新井康平`,
    author: `Kohei Arai`,
    description: `シリコンバレーで働くエンジニアのブログ`,
    siteUrl:
      process.env.CONTEXT === `deploy-preview`
        ? process.env.DEPLOY_URL
        : `https://1kohei1.com`,
    social: {
      twitter: `koheiarai94`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          "gatsby-remark-lazy-load",
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.CONTEXT === `production` ? `UA-30602294-5` : ``,
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                }
              })
            },
            query: `{
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date]},
              ) {
                edges {
                  node {
                    fields { slug }
                    excerpt
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            }`,
            output: `/rss.xml`,
            title: `新井康平`,
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
  ],
}
