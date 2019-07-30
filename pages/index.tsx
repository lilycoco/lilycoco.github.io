import * as React from 'react'
import { Cover, Opacity, TytleWrapper, Title, Text } from '../components/index/Style'
import { Button } from 'react-bootstrap'
import { Layout } from '../components/layouts/Layout'
import Link from 'next/link'

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Cover>
          <Opacity>
            <TytleWrapper>
              <Title>Welcome to my page!</Title>
              <Text>
                This is Lilycoco's website, who is a React.js, Node.js and TypeScript developer.
              </Text>
              <p>
                <Link href='/home'>
                  <Button variant='primary'>Explore More</Button>
                </Link>
              </p>
            </TytleWrapper>
          </Opacity>
        </Cover>
      </Layout>
    )
  }
}
