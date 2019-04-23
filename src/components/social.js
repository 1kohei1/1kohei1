import React from "react"

function Social({ url, title, twitter }) {
  url = encodeURI(url)
  title = encodeURIComponent(title)
  return (
    <div className="shares">
      {/* Twitter */}
      <div>
        <a
          href={`https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${twitter}`}
          className="my-tweet-button"
        >
          <i />
          <span>Tweet</span>
        </a>
      </div>
      {/* hatena */}
      <div>
        <a
          href="http://b.hatena.ne.jp/entry/"
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic-label"
          data-hatena-bookmark-lang="ja"
          data-hatena-bookmark-height="28"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
            style={{ border: "none" }}
          />
        </a>
      </div>
      {/* fb */}
      <div
        className="fb-share-button"
        data-href={url}
        data-layout="button"
        data-size="large"
      >
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fb-xfbml-parse-ignore"
        >
          Share
        </a>
      </div>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </a>
      </div>
    </div>
  )
}

export default Social
