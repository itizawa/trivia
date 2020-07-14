import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';
import appContainer from '@containers/appContainer';
import TriviaListContainer from '../containers/TriviaListContainer';

function Page(pageProps) {
  return (
    <appContainer.Provider>
      <TriviaListContainer.Provider>
        <Navbar {...pageProps} />
        <div className="container">
          <pageProps.Component {...pageProps} />
        </div>
      </TriviaListContainer.Provider>
    </appContainer.Provider>
  );
}

export default Page;
