import React, { useState } from 'react'
import { Products } from '../components/home/Products'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import { reversedContentsList, addPoint } from '../lib/home'

export default function Home() {
  const [content, setContent] = useState(reversedContentsList)
  const addedPointContent: any = (icon: string, i: number) => setContent(addPoint(content, icon, i))

  return (
    <Layout>
      <MainTitle>What's New?</MainTitle>
      <Products
        contents={content}
        onClick={(icon: string, i: number) => addedPointContent(icon, i)}
      />
    </Layout>
  )
}
