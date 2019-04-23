import React from "react"

function Social({ url }) {
  return (
    <div className="shares">
      <div>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-size="large"
          data-via="koheiarai94"
          data-show-count="false"
        >
          Tweet
        </a>
      </div>
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
      <div
        className="fb-share-button"
        data-href={url}
        data-layout="button"
        data-size="large"
      >
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
            url
          )};src=sdkpreparse`}
          className="fb-xfbml-parse-ignore"
        >
          Share
        </a>
      </div>
    </div>
  )
}

export default Social
