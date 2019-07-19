import React from 'react'
import { Layout } from '../components/Layout'
import { Game } from '../components/tetris/Game'

export default class Tetris extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
