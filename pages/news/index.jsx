import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div className="bg-snow rounded mt-3 p-3">
        <h1 className="text-center border-bottom mb-3">News 一覧</h1>
        <ul className="list-group">
          <li className="list-group-item">
            2020/09/24<br />
            <Link href="/news/20200924">
              <a>
                v1.0.1 にアップデートしました
              </a>
            </Link>
          </li>
        </ul>
        <ul className="list-group">
          <li className="list-group-item">
            2020/09/22<br />
            <Link href="/news/20200922">
              <a>
                β版をリリースしました
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NewsPage;
