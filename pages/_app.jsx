import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';
import appContainer from '@containers/appContainer';

function Page(pageProps) {
  return (
    <appContainer.Provider>
      <Navbar {...pageProps} />
      <div className="container">
        <pageProps.Component {...pageProps} />
      </div>
    </appContainer.Provider>
  );
}

export default Page;
