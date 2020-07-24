/* eslint-disable max-len */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# prefix属性: http://ogp.me/ns/ prefix属性#" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />

          <meta property="og:url" content="https://tips.weseek.co.jp/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Summary Post" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@weseek_inc" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

}
