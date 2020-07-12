import React from 'react';
import Router from 'next/router';

const IndexPage = () => (
  <div className="bg-snow rounded mt-3 p-3">
    <div className="my-5">
      <img width="100%" src="/eye-catch@2x.png" />
    </div>
    簡単に要約を作れるサイトです。Twitter連携で作ったサマリーをTweetできます。<br />あなたの言葉が世界の理を紡ぐ....
    <div className="my-5">
      <div className="d-flex justify-content-around">
        <button type="button" className="btn btn-orange text-white" onClick={() => { Router.push('/new') }}>
          サマリーを作る
        </button>
        <button type="button" className="btn btn-teal text-white" onClick={() => { Router.push('/list') }}>
          サマリーを見る
        </button>
      </div>
    </div>
  </div>
);

export default IndexPage;
