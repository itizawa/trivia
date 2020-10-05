import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Markdown from 'react-markdown';

import { getSortedPostsData, getPostData } from '@lib/utils/fetchPostData';

function NewsPage({ pageProps }) {
  const { postData } = pageProps;

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:image" content={`https://release-ogp.vercel.app/api/ogp?text=${postData.title}`} />
        <meta name="description" content={`${postData.content.substr(0, 80)}...`} />
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <div className="d-flex mb-3">
          <button type="button" className="btn btn-sm btn-outline-light mr-auto" onClick={() => { Router.push('/news') }}>リストに戻る</button>
          <a
            className="btn text-white btn-twitter"
            href={`https://twitter.com/intent/tweet?text=🎉${postData.title}🎉 詳しくはこちら https://trivia-online.com/news/${postData.id}&hashtags=trivia_online`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <h1 className="text-center border-bottom mb-3">
          {postData.title}
        </h1>
        {postData.date}<br />
        <Markdown className="news-post" source={postData.content} />
      </div>
    </>

  );
}

export async function getStaticPaths() {
  const newsPosts = getSortedPostsData();
  const paths = newsPosts.map(doc => `/news/${doc.date.split('/').join('')}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

NewsPage.propTypes = {
  pageProps: PropTypes.object,
};

export default NewsPage;
