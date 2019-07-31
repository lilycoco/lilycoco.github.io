import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../styled/Page'
import { Game } from '../components/tetris/Game'

export default function Tetris() {
  return (
    <Layout>
      <MainTitle>TETRIS</MainTitle>
      <Game />
    </Layout>
  )
}
