import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import axios from 'axios';
import TriviaCard from '@components/Trivia/TriviaCard';
import TriviaModal from '@components/Trivia/TriviaModal';

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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}


// export async function getStaticPaths() {
//   return {
//     paths: ['/foo'],
//     fallback: true,
//   };
// }

export const getStaticProps = async(ctx) => {

  let data;

  try {
    const res = await axios.get('/api/trivias/list?page=1');
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
  };
};

ListPage.propTypes = {
  pageProps: PropTypes.object,
};

export default ListPage;
