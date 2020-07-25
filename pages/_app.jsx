import React from 'react';
import '../styles/global.scss';

import Navbar from '@components/commons/Navbar';
import appContainer from '@containers/appContainer';
import TriviaListContainer from '@containers/TriviaListContainer';
import FixedFooter from '../components/commons/FexedFooter';
import UserContainer from '../containers/UserContainer';

function Page(pageProps) {
  return (
    <appContainer.Provider>
      <UserContainer.Provider>
        <TriviaListContainer.Provider>
          <Navbar {...pageProps} />
          <div className="container mb-5">
            <pageProps.Component {...pageProps} />
          </div>
          <FixedFooter />
        </TriviaListContainer.Provider>
      </UserContainer.Provider>
    </appContainer.Provider>
  );
}

export default Page;
