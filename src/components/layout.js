import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { isRoot, title, children } = this.props
    let header

    if (isRoot) {
      header = (
        <h1 className="root-title">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="container">
        <header>{header}</header>
        <main>{children}</main>
        <footer />
      </div>
    )
  }
}

export default Layout
