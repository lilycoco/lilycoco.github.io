import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { Game } from '../components/tictac/Game'

export default function TicTocToe() {
  return (
    <Layout>
      <MainTitle>Tic Tac Toe</MainTitle>
      <Game />
    </Layout>
  )
}
