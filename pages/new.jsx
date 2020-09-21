import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import TagsInput from 'react-tagsinput';
import {
  Collapse, Button,
} from 'reactstrap';
import appContainer from '@containers/appContainer';

import { toastError } from '@utils/toaster';
import LoginRequired from '@components/LoginRequired';
import TagDropdown from '../components/Tag/TagDropdown';

function Page() {
  const { apiPost } = appContainer.useContainer();

  const [genre, setGenre] = useState(null);
  const [tags, setTags] = useState([]);
  const [forwardText, setForwardText] = useState('');
  const [backwardText, setBackwardText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [invalidFormValue, setInvalidFormValue] = useState(false);

  const [previewUrl, setPreviewUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onChangeTagsValue = (tags) => {
    setTags(tags);
  };

  async function onClickSubmit() {
    try {
      await apiPost('/trivias', {
        forwardText, backwardText, tags, genre, bodyText,
      });
      Router.push('/list');
    }
    catch (error) {
      toastError(error, 'Error');
    }
  }

  function generatePreview() {
    setIsOpen(true);
    setPreviewUrl(`forwardText=${forwardText}&backwardText=${backwardText}`);
  }

  useEffect(() => {
    // validate form
    const bool = (forwardText === '' || backwardText === '' || genre == null);
    setInvalidFormValue(bool);
  }, [forwardText, backwardText, genre]);

  return (
    <>
      <Head>
        <title>トリビアを作る</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">トリビアを作成する</h1>
        <label className="form-label">ジャンル</label>
        <TagDropdown genre={genre} setGenre={setGenre} />
        <label className="form-label mt-3">タグ (3件まで)</label>
        <TagsInput
          value={tags}
          onChange={onChangeTagsValue}
          maxTags="3"
        />
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="forwardText" className="form-label">前の文</label>
            <input
              type="text"
              className="form-control"
              id="forwardText"
              value={forwardText}
              onChange={e => setForwardText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="backwardText" className="form-label">後ろの文(モザイクで表示されます)</label>
            <input
              type="text"
              className="form-control"
              id="backwardText"
              value={backwardText}
              onChange={e => setBackwardText(e.target.value)}
            />
          </div>
          <div className="row mb-3">
            <div className="col-12 px-2 mb-md-0">
              <button
                type="button"
                className="btn btn-orange text-snow mr-3 w-100"
                onClick={generatePreview}
              >
                { isOpen ? 'プレビューを更新する' : 'プレビューを見る'}
              </button>
            </div>
            <Collapse isOpen={isOpen}>
              <img
                className="mt-3"
                width="100%"
                src={`https://trivia-ogp.vercel.app/api/ogp?${previewUrl}`}
              />
            </Collapse>
          </div>
          <div className="mb-3">
            <label htmlFor="backwardText" className="form-label">本文(必須ではありません)</label>
            <textarea
              type="text"
              className="form-control"
              id="bodyText"
              rows="10"
              value={bodyText}
              onChange={e => setBodyText(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-12 px-2 mb-4 mb-md-0 mt-3">
              <Button
                type="button"
                className="btn btn-teal text-snow w-100"
                disabled={invalidFormValue}
                onClick={onClickSubmit}
              >
                作成する！
              </Button>
            </div>
          </div>
        </form>

      </div>
    </>
  );
}

export default LoginRequired(Page);
