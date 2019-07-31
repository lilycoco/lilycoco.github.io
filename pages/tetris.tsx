import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Game } from '../components/tetris/Game'
import { MainTitle } from '../styled/Page'

export default function Tetris() {
  return (
    <Layout>
      <MainTitle>TETRIS</MainTitle>
      <Game />
    </Layout>
  )
}
