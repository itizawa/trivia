import React, { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import appContainer from '@containers/appContainer';

import { toastError } from '@utils/toaster';
import LoginRequired from '@components/LoginRequired';
import { useSession } from 'next-auth/client';

function Page() {
  const { apiPost } = appContainer.useContainer();
  const [session] = useSession();
  const [forwardText, setForwardText] = useState('');
  const [backwardText, setBackwardText] = useState('');
  const [userName] = useState(session.user.name);

  async function onClickSubmit() {
    try {
      await apiPost('/trivias', { forwardText, backwardText, userName });
      Router.push('/list');
    }
    catch (error) {
      toastError(error, 'Error');
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

export default LoginRequired(Page);
