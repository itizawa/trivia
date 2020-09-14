import React from 'react';
import Head from 'next/head';
import Term from '../../components/Term/Term';

const TermPage = () => (
  <>
    <Head>
      <title>利用規約</title>
    </Head>
    <div className="bg-snow rounded mt-3 p-3">
      <h1 className="text-center border-bottom mb-3">利用規約</h1>
      <Term />
    </div>
  </>
);

export default TermPage;
