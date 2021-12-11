import React from 'react';
import Document, { Html, DocumentContext, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): React.ReactElement {
    return (
      <Html lang='id'>
        <Head>
          <meta charSet='UTF-8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <meta name='title' content='@hafidzamr' />
          <meta name='description' content='About Hafidz Amrulloh' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://hafidzamr.dev/' />
          <meta property='og:title' content='Hafidz Amrulloh' />
          <meta property='og:description' content='About Hafidz Amrulloh' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://hafidzamr.dev/' />
          <meta property='twitter:title' content='About Hafidz Amrulloh' />
          <meta property='twitter:description' content='About Hafidz Amrulloh' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
            rel='stylesheet'
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

export default MyDocument;
