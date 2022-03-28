import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = (): JSX.Element => {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
