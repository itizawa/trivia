import React, { useEffect } from 'react';
import Router from 'next/router';
import '../styles/global.scss';

import { Provider } from 'next-auth/client';

import appContainer from '@containers/appContainer';
import TriviaListContainer from '@containers/TriviaListContainer';

import Navbar from '@components/commons/Navbar';
import FixedFooter from '../components/commons/FexedFooter';
import * as gtag from '../lib/gtag';

function Page(pageProps) {
  const { session } = pageProps;

  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <appContainer.Provider>
      <Provider session={session}>
        <TriviaListContainer.Provider>
          <Navbar {...pageProps} />
          <div className="container">
            <pageProps.Component {...pageProps} />
          </div>
          <FixedFooter />
        </TriviaListContainer.Provider>
      </Provider>
    </appContainer.Provider>
  );
}

export default Page;
