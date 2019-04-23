import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import renderAst from "../util/renderAst"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const twitter = this.props.data.site.siteMetadata.social.twitter
    const { previous, next } = this.props.pageContext

    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const postTitle = `${post.frontmatter.title} | ${siteTitle}`
    const postUrl = `${siteUrl}${this.props.location.pathname}`

    let image = undefined
    if (post.frontmatter.image) {
      const imageUrl = post.frontmatter.image.childImageSharp.fixed.src
      image = `${siteUrl}${imageUrl}`
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          keywords={post.frontmatter.keywords || []}
          image={image}
        />
        <h1>{post.frontmatter.title}</h1>
        <p className="post-date">{post.frontmatter.date}</p>
        {renderAst(post.htmlAst)}
        <h3>シェアボタン</h3>
        <Social url={postUrl} title={postTitle} twitter={twitter} />
        <hr className="post-separator" />
        <Bio />

        {previous && (
          <p style={{ textAlign: "left" }}>
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </p>
        )}
        {next && (
          <p style={{ textAlign: "right" }}>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          </p>
        )}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        keywords
        image {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
