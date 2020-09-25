import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import getSortedPostsData from '@lib/utils/fetchPostData';

function NewsPage(props) {
  const { newsPosts } = props.pageProps;

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">News 一覧</h1>
        <ul className="list-group">
          {newsPosts.map((post) => {
            return (
              <li key={post.id} className="list-group-item">
                {post.date}<br />
                <Link href={`/news/${post.date.split('/').join('')}`}>
                  <a>
                    {post.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const newsPosts = getSortedPostsData();
  return {
    props: {
      newsPosts,
    },
  };
}

NewsPage.propTypes = {
  pageProps: PropTypes.object,
};

export default NewsPage;
