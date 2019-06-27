// サーバーサイド側とクライアント側、両方で実行される
// https://nextjs.org/docs/#custom-app

import React from 'react'
import App, { Container } from 'next/app'
import { Header } from '../components/Header'

export default class MyApp extends App {
  static async getInitialProps(ctx: any) {
    let pageProps = {}

    if (ctx.Component.getInitialProps) {
      pageProps = await ctx.Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    )
  }
}
