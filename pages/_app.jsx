import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';

function Page(pageProps) {
  return (
    <div>
      <Navbar {...pageProps} />
      <pageProps.Component {...pageProps} />
    </div>
  );
}

export default Page;
