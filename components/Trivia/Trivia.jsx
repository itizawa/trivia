import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { useSession } from 'next-auth/client';

import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';
import { useDebouncedCallback } from 'use-debounce';
import { toastError } from '@utils/toaster';

import appContainer from '@containers/appContainer';
import ArrowInRight from '../commons/icons/ArrowInRight';
import AdmirationCounter from './AdmirationCounter';
import AdmirationButton from './AdmirationButton';
import TagLabels from '../Tag/TagLabels';

function Trivia(props) {
  const { apiPut, apiGet } = appContainer.useContainer();

  const [session, isLoading] = useSession();

  const { trivia } = props;
  const creator = props.trivia?.creator;

  const triviaCardEl = useRef();

  const shareUrl = `https://summary-post.vercel.app/trivias/${trivia?._id}`;
  const [count, setCount] = useState(null);
  const [hashTags, setHashTags] = useState('');

  const tweetText = `${trivia?.title}.... ${shareUrl}`;

  // count for increment DB
  const [incrementCount, setIncrementCount] = useState(0);

  if (trivia == null) {
    return null;
  }

  function onSetHashTags(hashTags) {
    setHashTags(hashTags);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const retrieveAdmirations = useCallback(async() => {

    // for loading
    if (isLoading) {
      return;
    }

    // guest user
    if (session == null) {
      return setCount(0);
    }

    try {
      const res = await apiGet(`/trivias/${trivia?._id}/admirations`);
      const count = res?.admiration?.count || 0;
      return setCount(count);
    }
    catch (error) {
      toastError(error, 'Error');
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isLoading]);

  function generateFlowingWords() {
    const div = document.createElement('div');
    div.classList.add('trivia-scroll');
    div.innerText = 'へぇ';
    triviaCardEl.current.append(div);
  }

  async function updateOwnAdmiration() {
    // guest user
    if (session == null) {
      return;
    }

    try {
      const count = incrementCount;
      setIncrementCount(0);
      await apiPut(`/trivias/${trivia?._id}/admirations`, { count });
    }
    catch (error) {
      toastError(error, 'Error');
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [debouncedCallback] = useDebouncedCallback(
    () => {
      updateOwnAdmiration();
    }, 500,
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    retrieveAdmirations();
  }, [retrieveAdmirations]);

  function pushAdmirationButtonHandler() {
    setIncrementCount(incrementCount + 1);
    setCount(count + 1);
    generateFlowingWords();
    debouncedCallback();
  }

  return (
    <>
      <div className="d-flex">
        <div>
          <img height="24px" className="rounded-circle bg-white mr-2" src={creator?.image} />
          <span className="text-center">{creator?.name} </span>
        </div>
        <div className="ml-auto">
          <TagLabels triviaId={trivia._id} onSetHashTags={onSetHashTags} />
        </div>
      </div>
      <div className="d-flex">
        <span className="mr-auto">{fromTimeStampToDate(trivia?.createdAt)}</span>
        <span>合計 {trivia?.acquisitionCount} へえ</span>
      </div>
      <div className="img-box-fix-aspect trivia-card" ref={triviaCardEl}>
        <img
          src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${trivia?.title}`}
          alt={trivia?.title}
        />
      </div>
      {trivia?.bodyText && (
        <div className="p-3 my-3 bg-aliceblue">
          <Markdown source={trivia?.bodyText} />
        </div>
      )}
      {(session == null && !isLoading) && (
        <>
          <p className="alert alert-info my-3 text-center">
            <span className="mr-2">ログインして <b>へぇ</b> をカウントしよう</span>
            <Link href="/login">
              <a className="text-center">
                <ArrowInRight />
                <span className="ml-2">login</span>
              </a>
            </Link>
          </p>
        </>
      )}
      <div className="row mt-2">
        <div className="col-4">
          <AdmirationCounter count={count} />
        </div>
        <div className="col-4 text-center">
          <AdmirationButton
            onClick={pushAdmirationButtonHandler}
            isSkeleton={count == null}
            disabled={count >= 20}
          />
        </div>
        <div className="col-4 text-right">
          <a
            className="btn text-white btn-twitter"
            href={`https://twitter.com/intent/tweet?text=${tweetText}&hashtags=${hashTags}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

Trivia.propTypes = {
  trivia: PropTypes.object,
};


export default Trivia;
