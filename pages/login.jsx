import React from 'react';
import Head from 'next/head';

const IndexPage = () => (
  <>
    <Head>
      <title>ログインページ</title>
    </Head>
    <div className="bg-snow rounded mt-3 p-3">
      <h1 className="text-center">ログインページ</h1>
      <div className="my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-2 mb-4 mb-md-0">
            <button type="button" className="btn btn-google text-white w-100" onClick={() => { Router.push('/new') }}>
              <i className="fab fa-google mr-2"></i>
              Google
            </button>
          </div>
          <div className="col-12 col-md-6 px-2">
            <button type="button" className="btn btn-twitter text-white w-100" onClick={() => { Router.push('/list') }}>
              <i className="fab fa-twitter mr-2"></i>
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
