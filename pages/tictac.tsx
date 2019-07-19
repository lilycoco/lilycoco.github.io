import React from 'react'
import { Layout } from '../components/Layout'
import { Game } from '../components/TictacGame'

export default class TicTocToe extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
