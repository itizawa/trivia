import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';
import appContainer from '@containers/appContainer';
import TriviaListContainer from '@containers/TriviaListContainer';
import FixedFooter from '../components/commons/FexedFooter';

function Page(pageProps) {
  return (
    <appContainer.Provider>
      <TriviaListContainer.Provider>
        <Navbar {...pageProps} />
        <div className="container mb-5">
          <pageProps.Component {...pageProps} />
        </div>
        <FixedFooter />
      </TriviaListContainer.Provider>
    </appContainer.Provider>
  );
}

export default Page;
