// サーバーサイド側 (Node.js側) でのみ実行される。
// https://nextjs.org/docs/#custom-document

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet() // styled-componentsをSSRする // https://www.styled-components.com/docs/advanced#server-side-rendering
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()],
    }
  }

  public render() {
    return (
      <html lang='ja'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='author' content='Lilycoco' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
