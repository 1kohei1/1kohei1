import React from "react"
import debounce from "lodash.debounce"

/**
 * This component code is taken from https://github.com/chibicode/jp.chibicode.com/blob/8481ca943c968ea178863d16f36faf5938bf5022/src/components/twitter-embed.js
 * To implement lazy load twitter card as user scrolls
 */

export default class TwitterEmbed extends React.Component {
  wrapper = null

  state = { tweetRenderStatus: "NOT_READY" }

  handleScroll = () => {
    if (
      this.state.tweetRenderStatus === "NOT_READY" &&
      this.wrapper &&
      //
      this.wrapper.getBoundingClientRect().top < window.innerHeight * 3
    ) {
      this.setState({ tweetRenderStatus: "READY" })
    }
  }

  handleScrollDebounced = debounce(this.handleScroll, 100)

  onTweetLoadSuccess = () => {
    this.SVGElementInstanceList({ tweetRenderStatus: "SUCCESS" })
  }

  onTweetLoadError = () => {
    this.setState({ tweetRenderStatus: "ERROR" })
  }

  renderTweet = () => {
    if (window.twttr && window.twttr.ready) {
      window.twttr.ready(({ widgets }) => {
        if (this.wrapper) {
          this.wrapper.innerHTML = ""
        }

        // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview.html
        widgets
          .createTweet(this.props.id, this.wrapper, {
            cards: "true",
            dnt: "true",
            lang: "ja",
            align: "center",
            conversation: "none",
          })
          .then(this.onTweetLoadSuccess)
          .catch(this.onTweetLoadError)
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollDebounced)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollDebounced)
  }

  componentDidUpdate() {
    if (this.state.tweetRenderStatus === "READY") {
      this.renderTweet()
    }
  }

  render() {
    return <div ref={c => (this.wrapper = c)} />
  }
}
