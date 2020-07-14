import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

const IndexPage = () => (
  <>
    <Head>
      <title>トリビアの泉</title>
    </Head>
    <div className="bg-snow rounded mt-3 p-3">
      <div className="mb-3">
        <img width="100%" src="/eye-catch@2x.png" />
      </div>
      「生きていく上で何の役にも立たない無駄な知識、<br />しかし、つい人に教えたくなってしまうような<b>トリビア（雑学・知識）</b>」
      <br />
      共有するサイトです。
      <div className="my-5">
        <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-orange text-white" onClick={() => { Router.push('/new') }}>
            トリビアを作る
          </button>
          <button type="button" className="btn btn-teal text-white" onClick={() => { Router.push('/list') }}>
            トリビアを見る
          </button>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
