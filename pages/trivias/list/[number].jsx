import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import axios from 'axios';
import PaginationMenu from '@components/commons/PaginationWrapper';
import TriviaCard from '@components/Trivia/TriviaCard';

function ListPage({ pageProps }) {
  const { data } = pageProps;

  /**
   * on click page
   * @param {number} selectedPage selectedPage of trivia
   */
  function onChangePage(selectedPage) {
    window.scrollTo(0, 0);
    Router.push(`/trivias/list/${selectedPage}`);
  }

  return (
    <>
      <Head>
        <title>トリビア一覧</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">トリビア一覧</h1>
        {(data?.docs != null) && (
          <div className="row">
            {data.docs.map((trivia, index) => {
              return (
                <Link key={trivia._id} href={`/trivias/${trivia._id}`}>
                  <div className={`mb-3 ${index === 0 ? 'col-md-12' : 'col-md-6'}`} key={trivia._id}>
                    <TriviaCard trivia={trivia} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        {(data?.docs == null) && <p>Trivia が存在しません</p>}
        <PaginationMenu
          activePage={data?.page}
          totalItemsCount={parseInt(data?.totalDocs)}
          pagingLimit={data?.limit}
          changePage={onChangePage}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const siteUrl = process.env.SITE_URL;
  const res = await axios.get(`${siteUrl}/api/trivias/list?page=1`);

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
  const siteUrl = process.env.SITE_URL;
  let data;

  try {
    const res = await axios.get(`${siteUrl}/api/trivias/list?page=${number}`);
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
