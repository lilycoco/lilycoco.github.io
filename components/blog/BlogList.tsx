import { MainContents } from '../Style'
import { ListWrapper } from './Style'
import { BlogLink } from './BlogLink'

export const BlogList = (props: any) => (
  <MainContents>
    <ListWrapper>
      {props.posts.map((post: any, i: number) => (
        <BlogLink post={post} prev={props.posts[i - 1]} key={post.href} />
      ))}
    </ListWrapper>
  </MainContents>
)
