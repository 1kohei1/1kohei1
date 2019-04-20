import React from "react"
import rehypeReact from "rehype-react"
import TwitterEmbed from "../components/twitter-embed"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "twitter-embed": TwitterEmbed,
  },
}).Compiler

export default renderAst
