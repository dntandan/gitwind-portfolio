import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="GitWind" key="title" />
          <meta
            name="description"
            key="description"
            content="A Github themed portfolio template using NextJS & TailwindCSS"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content="https://gitwind.ml/" />
          <meta property="og:title" key="ogtitle" content="GitWind Portfolio" />
          <meta
            property="og:description"
            key="ogdescription"
            content="A Github themed portfolio template using NextJS & TailwindCSS"
          />
          <meta
            property="og:image"
            key="ogimage"
            content="https://gitwind.ml/assets/img/gitwind-banner.jpg"
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            key="twittercard"
            content="summary_large_image"
          />
          <meta
            property="twitter:url"
            key="twitterurl"
            content="https://gitwind.ml/"
          />
          <meta
            property="twitter:title"
            key="twittertitle"
            content="GitWind Portfolio"
          />
          <meta
            property="twitter:description"
            key="twitterdesc"
            content="A Github themed portfolio template using NextJS & TailwindCSS"
          />
          <meta
            property="twitter:image"
            key="twitterimage"
            content="https://gitwind.ml/assets/img/gitwind-banner.jpg"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
