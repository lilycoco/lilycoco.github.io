import Link from 'next/link'
import moment from 'moment'
import { BlogTitle, Year } from './Style'
import { Divider } from '../Style'
import { BlogConfig } from '../../models/Blog'

export const BlogLink = (props: { post: BlogConfig; prev: BlogConfig }) => {
  const { post, prev } = props
  const year = post.date.substr(0, 4)
  const prevYear = prev ? prev.date.substr(0, 4) : null
  return (
    <li>
      {(() =>
        year !== prevYear ? (
          <div>
            <Year className='code'>{year}</Year>
            <Divider />
          </div>
        ) : null)()}
      <BlogTitle>
        <div className='title'>
          <Link as={'/blog/' + post.href} href={`/article?id=${post.href}`}>
            <a>{post.title}</a>
          </Link>
        </div>
        <div className='post-date code'>{moment(post.date).format('MMM DD')}</div>
      </BlogTitle>
    </li>
  )
}
