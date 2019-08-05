import { MainContents } from '../Style'
import { ListWrapper } from './Style'
import { BlogLink } from './BlogLink'
import { BlogConfig } from '../../models/Blog'

export const BlogList = (props: { posts: BlogConfig[] }) => (
  <MainContents>
    <ListWrapper>
      {props.posts.map((post: BlogConfig, i: number) => (
        <BlogLink post={post} prev={props.posts[i - 1]} key={post.href} />
      ))}
    </ListWrapper>
  </MainContents>
)
