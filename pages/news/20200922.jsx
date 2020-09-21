import React from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Markdown from 'react-markdown';

function Page() {
  const title = 'β版をリリースしました';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <button type="button" className="btn btn-outline-light mb-3" onClick={() => { Router.push('/news') }}>リストに戻る</button>
        <h1 className="text-center border-bottom mb-3">{title}</h1>
        2020/09/22<br />
        <Markdown source={`こんにちは、Trivia Online 運営チームです。\n
2020年9月22日、β版をリリースすることとなりました。\n
β版でできることを紹介します。
## ログインなしでできること
- User が作った Trivia を見ることができる。
- Trivia 詳細画面を開ける。
- Trivia についたタグをクリックすることで、そのタグがついた Trivia 一覧を表示できる。
- Twitter 共有ボタンで画像付きで Trivia を共有できる。
## ログインしてできること
- Google or Twitter でログインすることができる。
- Trivia を新規作成することができる。
- 他の User が作った Trivia のボタンを押すことができる。
- 「へぇ」ボタンを押すことで Trivia にへぇを加算できる。

各種機能の詳細については [/Trivia-Online/外部仕様](https://itizawa-tech.growi.cloud/5f6743ba08a03a0048950df0) をご覧ください。

## 運営チームの目標
2020/09/22 時点での運営チームの目標を紹介します。現在の状態は [/Trivia-Online/運営チーム目標](https://itizawa-tech.growi.cloud/5f6801c9d7d2f70048dd7ebd) をご覧ください。
- ユーザー目線に立ち、ユーザーに寄り添ったサービスを開発します。
- β 版脱却のため定期的な改善、機能リリースを行います。
- 適切な開発フローで致命的なバグを防止します。
- 運営チームメンバーの満足度を高めます。`}
        />
      </div>
    </>
  );
}

export default Page;
