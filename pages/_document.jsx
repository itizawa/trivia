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
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="google-site-verification" content="iT9UqKdRcRp9KwhH5MrYL6HeWcNbQYFESsnONwk4Tro" />

          <meta property="og:url" content="https://trivia-online.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="トリビアの泉" />
          <meta
            property="og:description"
            content="「生きていく上で何の役にも立たない無駄な知識、しかし、つい人に教えたくなってしまうようなトリビア（雑学・知識）」共有するサイトです。"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@itizawa_pen" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }

}
