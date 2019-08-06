import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { getBlogContent } from '../lib/blog'
import { ArticleContainer } from '../components/article/ArticleContainer'
import { withRouter } from 'next/router'
import fm from 'front-matter'
import { BlogFrontMatterResult, BlogContent } from '../models/Blog'

const Article = (props: BlogContent) => (
  <Layout>
    <MainTitle>Blog</MainTitle>
    <ArticleContainer posts={props} />
  </Layout>
)

const getInitialProps = async ({ query }: { query: { id: string } }) => {
  const fname = `${query.id}.md`
  const post: any = await getBlogContent(fname)
  const meta: BlogFrontMatterResult<any> = fm(post)
  return {
    title: meta.attributes.title,
    date: fname.split('-')[0],
    html: meta.body,
  }
}

Article.getInitialProps = getInitialProps
export default withRouter(Article)
