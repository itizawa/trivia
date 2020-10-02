import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import '../styles/global.scss';

import { Provider } from 'next-auth/client';

import appContainer from '@containers/appContainer';
import TriviaListContainer from '@containers/TriviaListContainer';

import Navbar from '@components/commons/Navbar';
import FixedFooter from '../components/commons/FexedFooter';
import * as gtag from '../lib/gtag';
import p from '../package.json';

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta
          name="description"
          content="「生きていく上で何の役にも立たない無駄な知識、しかし、つい人に教えたくなってしまうようなトリビア（雑学・知識）」共有するサイトです。"
        />
      </Head>
      <appContainer.Provider>
        <Provider session={session}>
          <TriviaListContainer.Provider>
            <Navbar {...pageProps} />
            <div className="container">
              <pageProps.Component {...pageProps} />
            </div>
            <FixedFooter />
          </TriviaListContainer.Provider>
          <span className="version-logo">v {p.version}</span>
        </Provider>
      </appContainer.Provider>
    </>
  );
}

export default Page;
