import React, { useState } from 'react'
import { Products } from '../components/home/Products'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import { contentsList } from '../lib/home'

export default function Home() {
  const [content, setContent] = useState(contentsList.reverse())

  const addCount = (i: number) => {
    const current = content.concat()
    if (i >= 10) {
      current[i - 10].heart += 1
    } else {
      current[i].like += 1
    }
    setContent(current)
  }

  return (
    <Layout>
      <MainTitle>What's New?</MainTitle>
      <Products contents={content} onClick={(i: any) => addCount(i)} />
    </Layout>
  )
}
