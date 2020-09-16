import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import newsList from '../../lib/newsList';

const NewsPage = () => {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">News 一覧</h1>
        <ul className="list-group">
          {newsList.map((news) => {
          return (
            <li className="list-group-item" key={news.id}>
              {news.createdAt}<br />
              <Link href={`/news/${news.id}`}>
                <a>
                  {news.title}
                </a>
              </Link>
            </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

export default NewsPage;
