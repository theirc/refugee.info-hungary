import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="BeEC90eQfMtahevj2cqiyQqF6oREYZcP5zlHnCgrQeE"
        />
        <meta
          property="og:image:type"
          content="'https://hungary.refugee.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frefugeeinfo-hungary-logo.0be5b900.png&w=1920&q=75';"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          src="https://kit.fontawesome.com/027db3ea3f.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
        <script
          src="https://cdn-eu.readspeaker.com/script/11950/webReader/webReader.js?pids=wr"
          type="text/javascript"
          id="rs_req_Init"
          defer
        ></script>
        {/*
        TODO: get API Key from your Product manager, update src and uncomment the script.
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=37922dda-c8d9-441f-9a01-449297f3bb32"
          async> </script>*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
