import React, { useState } from 'react';
import Router from 'next/router';

import appContainer from '@containers/appContainer';

import { toastError } from '@utils/toaster';

function Page() {
  const { apiPost } = appContainer.useContainer();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  async function onClickSubmit() {
    try {
      await apiPost('/summarys', { title, text });
      Router.push('/');
    }
    catch (error) {
      toastError(error, 'サマリーの作成に失敗しました。');
    }
  }

  return (
    <div className="bg-snow rounded mt-3 p-3">
      <h1 className="text-center">新規サマリーを作成する</h1>
      <form className="mt-3">
        <div className="mb-3">
          <label htmlFor="summaryTitle" className="form-label">タイトル</label>
          <input
            type="text"
            className="form-control"
            id="summaryTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="summaryText" className="form-label">本文</label>
          <textarea
            type="text"
            className="form-control"
            id="summaryText"
            value={text}
            onChange={e => setText(e.target.value)}
            rows="10"
          />
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-orange text-snow" onClick={onClickSubmit}>
            作成する！
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
