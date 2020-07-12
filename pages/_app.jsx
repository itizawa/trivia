import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';

function Page(pageProps) {
  return (
    <div>
      <Navbar {...pageProps} />
      <div className="container">
        <pageProps.Component {...pageProps} />
      </div>
    </div>
  );
}

export default Page;
