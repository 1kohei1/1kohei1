import React from "react"

function Social({ url, title, twitter }) {
  url = encodeURI(url)
  title = encodeURIComponent(title)
  return (
    <div className="shares">
      {/* Twitter */}
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
      <div>
        <iframe
          src={`https://www.facebook.com/plugins/share_button.php?href=${url}&layout=button&size=large&width=73&height=28&appId`}
          width="73"
          height="28"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
    </div>
  )
}

export default Social
