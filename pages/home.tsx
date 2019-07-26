import React, { useState } from 'react'
import { Products } from '../components/home/Products'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import { reversedContentsList } from '../lib/home'

export default function Home() {
  const [content, setContent] = useState(reversedContentsList)

  const addCount = (icon: string, i: number) => {
    const current = content.map((c) => {
      if (c.id === i) {
        switch (icon) {
          case 'like':
            c.like += 1
            break
          case 'heart':
            c.heart += 1
            break
        }
      }
      return c
    })
    setContent(current)
  }

  return (
    <Layout>
      <MainTitle>What's New?</MainTitle>
      <Products contents={content} onClick={(icon: string, i: number) => addCount(icon, i)} />
    </Layout>
  )
}
