import React, { useState, useRef } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { fromTimeStampToDate } from '@lib/utils/fromTimeStampToDate';


function Page({ pageProps }) {
  const { trivia } = pageProps;
  const { creator } = trivia;

  const [count, setCount] = useState(0);
  const triviaCardEl = useRef();

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
      <Head>
        <title>{trivia.forwardText}</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <button type="button" className="btn btn-outline-light mb-3" onClick={() => { Router.back() }}>リストに戻る</button>
        <div>
          <img height="24px" className="rounded-circle bg-white mr-2" src={creator.image} />
          <span className="text-center">{creator.name} </span><br />
        </div>
        <div className="d-flex">
          <span className="mr-auto">{fromTimeStampToDate(trivia.createdAt)}</span>
          <span>合計 {count + trivia.acquisitionCount} へえ</span>
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
          </div>
        </div>
      </div>

    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  let trivia;

  try {
    const res = await Axios.get(`http://localhost:3000/api/trivias/${params.id}`);
    trivia = res.data.trivia;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: { trivia }, // will be passed to the page component as props
  };
}

Page.propTypes = {
  pageProps: PropTypes.object.isRequired,
};


export default Page;
