import * as React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Cover = styled.div`
  background-image: url('/static/monet_water_lilies.jpg');
  height: 700px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

const Opacity = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const TytleWrapper = styled.div`
  width: 600px;
  text-align: center;
  margin: auto;
  height: 200px;
  color: #37548f;
`

const Title = styled.h1`
  font-size: 45px;
  margin: 20px;
  font-weight: bold;
`

const Text = styled.h1`
  font-size: 15px;
  margin: 10px 0 30px;
`

interface EProps {
  contents: any
}

export default class BlogsPage extends React.Component<EProps> {
  public render() {
    return (
      <Cover>
        <Opacity>
          <TytleWrapper>
            <Title>Welcome to my page!</Title>
            <Text>
              This is Lilycoco's website, who is React.js, Node.js and TypeScript developer.
            </Text>
            <p>
              <Button variant='primary' href='/home'>
                Explore More
              </Button>
            </p>
          </TytleWrapper>
        </Opacity>
      </Cover>
    )
  }
}
