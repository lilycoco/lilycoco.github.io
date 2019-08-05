import { Button } from 'react-bootstrap'
import Link from 'next/link'
import { Cover, Opacity, TytleWrapper, Title, Text } from './Style'

export const CoverImage = () => (
  <Cover>
    <Opacity>
      <TytleWrapper>
        <Title>Welcome to my page!</Title>
        <Text>
          This is Lilycoco's website, who is a React.js, Node.js and TypeScript developer.
        </Text>
        <Link href='/home'>
          <Button variant='primary'>Explore More</Button>
        </Link>
      </TytleWrapper>
    </Opacity>
  </Cover>
)
