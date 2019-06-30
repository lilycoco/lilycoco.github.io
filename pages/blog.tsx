import * as React from 'react'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import Link from 'next/link'

const ArticleLink = (props: { id: number; title: string }) => (
  <li key={props.id}>
    <Link as={`/blog/${props.id}`} href={`/article?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <ul>
        <ArticleLink id={1} title='Hello Next.js' />
        <ArticleLink id={2} title='Learn Next.js is awesome' />
        <ArticleLink id={3} title='Deploy apps with Zeit' />
      </ul>
    </Layout>
  )
}
