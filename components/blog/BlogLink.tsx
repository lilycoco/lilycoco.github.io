import Link from 'next/link'
import moment from 'moment'
import { BlogTitle, Year } from './Style'

export const BlogLink = (props: { post: any; prev: any }) => {
  const { post, prev } = props
  const year = post.date.substr(0, 4)
  const prevYear = prev ? prev.date.substr(0, 4) : null
  return (
    <li>
      {(() =>
        year !== prevYear ? (
          <div>
            <Year className='code'>{year}</Year>
            <div style={{ border: 'solid 0.5px #6e6e6e' }} />
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
