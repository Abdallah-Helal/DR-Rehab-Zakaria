// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Dr - Rehab Zakria</title>
          <meta name="description" content="DR Rehab Zakaria WebSite" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="icon" sizes="180x180" href="/Img/favicon-180x180.png" />
          <link rel="icon" sizes="32x32" href="/Img/favicon-32x32.png" />
          <link rel="icon" sizes="16x16" href="/Img/favicon-16x16.png" />
          {/* <script>
            (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','*********');
        </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=*********"  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;