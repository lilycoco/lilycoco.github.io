import { withRouter } from 'next/router'
import { Layout } from '../components/Layout'
import Markdown from 'react-markdown'

const Article = withRouter((props: { router: any; query: any }) => (
  <Layout>
    <h1>{props.router.query.id}</h1>
    <div className='markdown'>
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
    </div>
    <style>{`
      .markdown {
        font-family: 'Arial';
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
        h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      }
    `}</style>
  </Layout>
))

export default Article
