import React from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Markdown from 'react-markdown';

function Page() {
  const title = 'v1.0.1 にアップデートしました';
  const date = '20200924';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content="/release/20200924@2x.png" />
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <div className="d-flex mb-3">
          <button type="button" className="btn btn-sm btn-outline-light mr-auto" onClick={() => { Router.push('/news') }}>リストに戻る</button>
          <a
            className="btn text-white btn-twitter"
            href={`https://twitter.com/intent/tweet?text=🎉${title}🎉 詳しくはこちら https://trivia-online.com/news/${date}&hashtags=trivia_online`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <h1 className="text-center border-bottom mb-3">
          {title}
        </h1>
        2020/09/24<br />
        <Markdown source={`こんにちは、Trivia Online 運営チームです。\n
2020年9月24日、細かい修正を含んだ v1.0.1 をリリースすることとなりました。\n
## Bug Fix
- [リストの一番下にスクロールバーが表示されている](https://github.com/trivia-online/trivia-roadmap/issues/10)
- [重複してタグを保存できてしまう](https://github.com/trivia-online/trivia-roadmap/issues/1)
## Improve
- [Trivia 詳細ページの SSG 化](https://github.com/trivia-online/trivia-roadmap/issues/12)
  - Trivia詳細ページの読み込みが早くなりました

## 今後の予定
  今後の開発予定については [trivia-online/trivia-loadmap](https://github.com/trivia-online/trivia-roadmap/projects/1) をご覧ください。
`}
        />
      </div>
    </>
  );
}

export default Page;
