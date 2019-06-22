/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social, author } = data.site.siteMetadata
        return (
          <div className="bio">
            <Image
              className="profile-image"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: "50%",
              }}
            />
            <div className="desc">
              シリコンバレーで働くエンジニア。
              <br />
              17で渡米。アメリカの大学でコンピュータサイエンス学士を取得。
              <br />
              Twitterは
              <a href={`https://twitter.com/${social.twitter}`}>
                @{social.twitter}
              </a>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile_for_blog.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
