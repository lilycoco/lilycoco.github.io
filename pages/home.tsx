import * as React from 'react'
import { Products } from '../components/home/Products'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/layouts/Layout'

export default function Home() {
  return (
    <Layout>
      <MainTitle>What's New?</MainTitle>
      <Products />
    </Layout>
  )
}
