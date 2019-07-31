import Link from 'next/link'

export const BlogLink = (props: { id: number; title: string }) => (
  <li key={props.id}>
    <Link as={`/blog/${props.id}`} href={`/article?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
