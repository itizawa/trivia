import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';

import axios from 'axios';
import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';
import PaginationMenu from '@components/commons/PaginationWrapper';

function ListPage({ pageProps }) {
  const { data } = pageProps;
  const { docs } = data;
  const [triviaForModal, setTriviaForModal] = useState(null);

  /**
   * open trivia modal
   * @param {string} id id of trivia
   */
  function onClickTriviaCard(id) {
    setTriviaForModal(id);
  }

  /**
   * close trivia modal
   * @param {string} id id of trivia
   */
  function onCloseModal() {
    setTriviaForModal(null);
  }

  /**
   * on click page
   * @param {number} selectedPage selectedPage of trivia
   */
  function onChangePage(selectedPage) {
    Router.push(`/trivias/list/${selectedPage}`);
  }

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">トリビア一覧</h1>
        {/* <TriviaList /> */}
        <div className="row">
          {docs.map((trivia, index) => {
            return (
              <div className={`mb-3 ${index === 0 ? 'col-md-12' : 'col-md-6'}`} key={trivia._id}>
                <TriviaCard trivia={trivia} onClickTriviaCard={onClickTriviaCard} />
                <TriviaModal trivia={trivia} isOpen={triviaForModal === trivia._id} onClose={onCloseModal} />
              </div>
            );
          })}
        </div>
        <PaginationMenu
          activePage={data.page}
          totalItemsCount={parseInt(data.totalDocs)}
          pagingLimit={data.limit}
          changePage={onChangePage}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';
  const res = await axios.get(`${hostUrl}/api/trivias/list?page=1`);

  const { totalPages } = await res.data;

  // その数字までの整数を配列にする。
  // ex) 5 => [1,2,3,4,5]
  // https://qiita.com/sakymark/items/710f0b9a632c375fbc31
  const numberArray = [...Array(totalPages).keys()];
  const paths = numberArray.map(index => `/trivias/list/${index + 1}`);

  return { paths, fallback: true };
}

export const getStaticProps = async(context) => {
  const { number } = context.params;
  const hostUrl = process.env.SITE_URL || 'http://localhost:3000';
  let data;

  try {
    const res = await axios.get(`${hostUrl}/api/trivias/list?page=${number}`);
    data = res.data;
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

ListPage.propTypes = {
  pageProps: PropTypes.object,
};

export default ListPage;
