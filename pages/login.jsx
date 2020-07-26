import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { signin } from 'next-auth/client';

import LogoutRequired from '@components/LogoutRequired';

function IndexPage() {
  const { query } = Router;

  return (
    <>
      <Head>
        <title>ログインページ</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center mb-3">ログインページ</h1>
        {query.isRedirect && <p className="alert alert-info mb-3">その操作にはログインが必要です</p>}
        <div className="row mb-3">
          <div className="col-12 col-md-6 px-2 mb-4 mb-md-0">
            <button type="button" className="btn btn-google text-white w-100" onClick={() => signin('google')}>
              <i className="fab fa-google mr-2"></i>
              Google
            </button>
          </div>
          <div className="col-12 col-md-6 px-2">
            <button type="button" className="btn btn-twitter text-white w-100" disabled>
              <i className="fab fa-twitter mr-2"></i>
              Twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoutRequired(IndexPage);
