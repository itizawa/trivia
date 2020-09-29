import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import axios from 'axios';
import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';
import PaginationMenu from '@components/commons/PaginationWrapper';

function ListPage({ pageProps }) {
  const { data } = pageProps;
  // console.log(pageProps);
  return null;
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
    // console.log(selectedPage);
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

  const { totalDocs } = await res.data;

  // https://qiita.com/sakymark/items/710f0b9a632c375fbc31
  const minitues = [...Array(totalDocs).keys()].map(i => ++i);
  console.log(minitues);

  return { paths: ['/trivias/list/1'], fallback: true };
}

export const getStaticProps = async(context) => {
  const { params } = context;
  // console.log(params);
  let data;

  try {
    const res = await axios.get('/api/trivias/list?page=1');
    // console.log(res.data);
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
