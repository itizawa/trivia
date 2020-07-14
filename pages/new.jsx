import React, { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import appContainer from '@containers/appContainer';

import { toastError } from '@utils/toaster';

function Page() {
  const { apiPost } = appContainer.useContainer();

  const [forwardText, setForwardText] = useState('');
  const [backwardText, setBackwardText] = useState('');
  const [userName, setUserName] = useState('');

  async function onClickSubmit() {
    try {
      await apiPost('/trivias', { forwardText, backwardText, userName });
      Router.push('/list');
    }
    catch (error) {
      toastError(error, 'トリビアの作成に失敗しました。');
    }
  }

  return (
    <>
      <Head>
        <title>トリビアを作る</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center">トリビアを作成する</h1>
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="forwardText" className="form-label">前の文</label>
            <textarea
              type="text"
              className="form-control"
              id="forwardText"
              value={forwardText}
              onChange={e => setForwardText(e.target.value)}
              rows="3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="backwardText" className="form-label">後ろの文(モザイクで表示されます)</label>
            <textarea
              type="text"
              className="form-control"
              id="backwardText"
              value={backwardText}
              onChange={e => setBackwardText(e.target.value)}
              rows="3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">名前</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              aria-describedby="userName"
            />
          </div>
          <div className="text-right">
            <button type="button" className="btn btn-orange text-snow" onClick={onClickSubmit}>
              作成する！
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
