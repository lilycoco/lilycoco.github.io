import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../styled/Page'
import { Products } from '../components/home/Products'

export default function Home() {
  return (
    <Layout>
      <MainTitle>What's New?</MainTitle>
      <Products />
    </Layout>
  )
}
