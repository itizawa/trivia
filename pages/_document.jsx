/* eslint-disable max-len */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { existsGaId, GA_ID } from '../lib/gtag';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# prefix属性: http://ogp.me/ns/ prefix属性#" />
          <meta name="google-site-verification" content="iT9UqKdRcRp9KwhH5MrYL6HeWcNbQYFESsnONwk4Tro" />
          <meta charSet="utf-8" />
          {/* Favicon */}
          <link rel="icon" href="/favicon/trivia.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/trivia.svg" />
          <link rel="icon" type="image/png" href="/favicon/trivia.svg" sizes="192x192" />

          <meta property="og:url" content="https://trivia-online.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="トリビアオンライン" />
          <meta
            property="og:description"
            content="「生きていく上で何の役にも立たない無駄な知識、しかし、つい人に教えたくなってしまうようなトリビア（雑学・知識）」共有するサイトです。"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@itizawa_pen" />

          {/* Google Analytics */}
          {existsGaId ? (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          ) : null}
          <meta name="google-site-verification" content="Mu616nJ4RjocSbl0vYSX1fL4ldsRpJqqnND7AWURYmo" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"></script>
        </body>
      </Html>

    );
  }

}
