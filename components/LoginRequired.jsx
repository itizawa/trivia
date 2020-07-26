import React from 'react';
import Router from 'next/router';

import { useSession } from 'next-auth/client';

/*
 * Higher order component that passes `getInitialProps` through
 * to the child component
 */
const LoginRequired = function(Page) {
  return function LoginRequired() {

    const [session, loading] = useSession();

    // Page is not rendering while loading user data
    if (loading) {
      return null;
    }

    if (session == null) {
      Router.push('/login');
      return null;
    }

    return <Page {...Page.props} />;
  };
};

export default LoginRequired;
