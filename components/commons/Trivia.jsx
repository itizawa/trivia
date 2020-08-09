import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';

function Trivia(props) {
  const { trivia } = props;
  const creator = props.trivia?.creator;

  const triviaCardEl = useRef();
  const shareUrl = `https://summary-post.vercel.app/trivias/${trivia?._id}`;
  const [count, setCount] = useState(0);

  if (trivia == null) {
    return null;
  }

  function generateFlowingWords() {
    const div = document.createElement('div');
    div.classList.add('trivia-scroll');
    div.innerText = 'へぇ';
    triviaCardEl.current.prepend(div);
  }

  function pushHeButtonHandler() {
    setCount(count + 1);
    generateFlowingWords();
  }

  return (
    <>
      <div>
        <img height="24px" className="rounded-circle bg-white mr-2" src={creator?.image} />
        <span className="text-center">{creator?.name} </span><br />
      </div>
      <div className="d-flex">
        <span className="mr-auto">{fromTimeStampToDate(trivia?.createdAt)}</span>
        <span>合計 {count + trivia?.acquisitionCount} へえ</span>
      </div>
      <div className="trivia-card" ref={triviaCardEl}>
        <img
          width="100%"
          height="auto"
          src={`https://trivia-ogp.vercel.app/api/ogp?forwardText=${trivia?.forwardText}&backwardText=${trivia?.backwardText}&isShow=true`}
          className="trivia-card-img rounded"
        />
      </div>
      <div className="row mt-2">
        <div className="col-4">
          {count} へえ
        </div>
        <div className="col-4 text-center">
          <button
            type="button"
            className="btn btn-info btn-trivia text-snow rounded-circle"
            onClick={pushHeButtonHandler}
            disabled={count >= 20}
          >
            へぇ
          </button>
        </div>
        <div className="col-4 text-right">
          <a
            className="btn text-white btn-twitter"
            href={`https://twitter.com/intent/tweet?text=${shareUrl}`}
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
