import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { getBlogLists } from '../lib/blog'
import { BlogList } from '../components/blog/BlogList'

const Blog = (props: { posts: any }) => {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <BlogList posts={props.posts} />
    </Layout>
  )
}

const getInitialProps = async () => {
  const posts = await getBlogLists()
  return { posts }
}

Blog.getInitialProps = getInitialProps
export default Blog
