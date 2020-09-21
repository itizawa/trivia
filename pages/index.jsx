import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import Pencil from '@components/commons/icons/Pencil';
import ViewList from '@components/commons/icons/ViewList';

const IndexPage = () => (
  <>
    <Head>
      <title>トリビアの泉</title>
    </Head>
    <div className="bg-snow rounded mt-3 p-3">
      <div className="img-box-fix-aspect mb-3">
        <img className="mb-3" src="/eye-catch@2x.png" alt="eye-catch" />
      </div>
      「生きていく上で何の役にも立たない無駄な知識、<br />しかし、つい人に教えたくなってしまうような<b>トリビア（雑学・知識）</b>」
      <br />
      共有するサイトです。
      <div className="my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-2 mb-3 mb-md-0">
            <button type="button" className="btn btn-orange text-white w-100" onClick={() => { Router.push('/new') }}>
              <Pencil />
              <span className="ml-2">
                トリビアを作る
              </span>
            </button>
          </div>
          <div className="col-12 col-md-6 px-2 mb-3 mb-md-0">
            <button type="button" className="btn btn-teal text-white w-100" onClick={() => { Router.push('/list') }}>
              <ViewList />
              <span className="ml-2">
                トリビアを見る
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <img className="col-md-6" src="/eye-catch/search.svg" />
        <div className="col-md-6 d-flex align-content-around flex-wrap">
          <h2 className="bg-info p-3 text-snow rounded w-100">
            <span className="text-left">
              トリビアは...
            </span>
            <br />
            <span className="text-right d-block mt-3">
              知的好奇心の源
            </span>
          </h2>
          <p className="text-center w-100">
            他の人が作った Trivia を読むことで、<br />
            他分野の無駄知識を獲得します<br />
            新たな知識は、知的好奇心を刺激します。
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <img className="col-md-6 d-md-none d-block" src="/eye-catch/creative.svg" />
        <div className="col-md-6 d-flex align-content-around flex-wrap">
          <h2 className="bg-info p-3 text-snow rounded w-100">
            <span className="text-left">
              トリビアは...
            </span>
            <br />
            <span className="text-right d-block mt-3">
              革新的アイデアの種
            </span>
          </h2>
          <p className="text-center w-100">
            自分の Trivia をまとめることで<br />
            知識の整理、知見の棚卸しができ、<br />
            思いも寄らないアイデアが浮かびます。
          </p>
        </div>
        <img className="col-md-6 d-none d-md-block" src="/eye-catch/creative.svg" />
      </div>
      <div className="row mb-3">
        <img className="col-md-6" src="/eye-catch/social.svg" />
        <div className="col-md-6 d-flex align-content-around flex-wrap">
          <h2 className="bg-info p-3 text-snow rounded w-100">
            <span className="text-left">
              トリビアは...
            </span>
            <br />
            <span className="text-right d-block mt-3">
              コミュニティの架け橋
            </span>
          </h2>
          <p className="text-center w-100">
            あなたが作った Trivia は<br />
            画像付きでシェアができます。<br />
            それは無駄知識を通じた自己表現。
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-2 mb-3 mb-md-0">
            <button type="button" className="btn btn-orange text-white w-100" onClick={() => { Router.push('/new') }}>
              <Pencil />
              <span className="ml-2">
                トリビアを作る
              </span>
            </button>
          </div>
          <div className="col-12 col-md-6 px-2 mb-3 mb-md-0">
            <button type="button" className="btn btn-teal text-white w-100" onClick={() => { Router.push('/list') }}>
              <ViewList />
              <span className="ml-2">
                トリビアを見る
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
