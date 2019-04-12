/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div className="bio">
            <p>
              シリコンバレーで働きだしたエンジニアのブログ
              <br />
              Twitterは
              <a href={`https://twitter.com/${social.twitter}`}>
                @{social.twitter}
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
