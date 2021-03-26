import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          
        <link rel="shortcut icon" href="/images/avofeliz.ico" />
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
          <title>Portfolio | Avo</title>
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
