import { BlogLink } from './BlogLink'
import { MainContents } from '../Style'

export const BlogList = () => (
  <MainContents>
    <ul>
      <BlogLink id={1} title='Hello Next.js' />
      <BlogLink id={2} title='Learn Next.js is awesome' />
      <BlogLink id={3} title='Deploy apps with Zeit' />
    </ul>
  </MainContents>
)
