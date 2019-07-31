import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Game } from '../components/tictac/Game'
import { MainTitle } from '../styled/Page'

export default function TicTocToe() {
  return (
    <Layout>
      <MainTitle>Tic Tac Toe</MainTitle>

      <Game />
    </Layout>
  )
}
