/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, isRoot, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  let keys = [
    "新井康平",
    "エンジニア",
    "シリコンバレー",
    "サンフランシスコ",
    "Kohei Arai",
    "アメリカ",
  ]
  if (keywords && keywords.length > 0) {
    keys = keys.concat(keywords)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s${isRoot ? "" : " | " + site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keys.length > 0
            ? {
                name: `keywords`,
                content: keys.join(`, `),
              }
            : []
        )
        .concat(
          image
            ? [
                {
                  name: `twitter:image`,
                  content: image,
                },
                {
                  property: `og:image`,
                  content: image,
                },
              ]
            : []
        )
        .concat(meta)}
    >
      {!isRoot && (
        <script
          async
          type="text/javascript"
          src="https://b.st-hatena.com/js/bookmark_button.js"
          charSet="utf-8"
        />
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
