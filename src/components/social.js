import React from "react"

function Social({ url, title, twitter }) {
  url = encodeURI(url)
  title = encodeURIComponent(title)
  return (
    <div className="shares">
      {/* Twitter */}
      <div>
        <a
          href="/"
          className="my-tweet-button"
          onClick={e => {
            // Adblocker hides share buttons by looking at href
            // So open the window by the browser
            e.preventDefault()
            window.open(
              `https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${twitter}`,
              `Share a link on Twitter`,
              `width=550, height=520`
            )
          }}
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
      <div>
        <a
          href="/"
          target="_blank"
          className="my-share-button"
          rel="noopener noreferrer"
          onClick={e => {
            // Adblocker hides share buttons by looking at href
            // So open the window by the browser
            e.preventDefault()
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              `Post to Facebook`,
              `width=550, height=520`
            )
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="my-fb-icon"
            color="#ffffff"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M8 14H3.667C2.733 13.9 2 13.167 2 12.233V3.667A1.65 1.65 0 0 1
            3.667 2h8.666A1.65 1.65 0 0 1 14 3.667v8.566c0 .934-.733
            1.667-1.667
            1.767H10v-3.967h1.3l.7-2.066h-2V6.933c0-.466.167-.9.867-.9H12v-1.8c.033
            0-.933-.266-1.533-.266-1.267 0-2.434.7-2.467
            2.133v1.867H6v2.066h2V14z"
            />
          </svg>
          <span>Share</span>
        </a>
      </div>
    </div>
  )
}

export default Social
