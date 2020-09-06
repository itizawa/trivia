import React from 'react';
import '../styles/global.scss';

import { Provider } from 'next-auth/client';

import appContainer from '@containers/appContainer';
import TriviaListContainer from '@containers/TriviaListContainer';

import Navbar from '@components/commons/Navbar';
import FixedFooter from '../components/commons/FexedFooter';

function Page(pageProps) {
  const { session } = pageProps;

  return (
    <appContainer.Provider>
      <Provider session={session}>
        <TriviaListContainer.Provider>
          <Navbar {...pageProps} />
          <div className="container mb-5">
            <pageProps.Component {...pageProps} />
          </div>
          <FixedFooter />
        </TriviaListContainer.Provider>
      </Provider>
    </appContainer.Provider>
  );
}

export default Page;
