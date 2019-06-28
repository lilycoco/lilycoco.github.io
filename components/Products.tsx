import { Tron } from '../models/Tron'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Ul = styled.ul`
  list-style: none;
`
const Li = styled.li`
  margin: auto;
  display: flex;
  width: 80%;
  border-bottom: solid 1px #6e6e6e;
  padding: 50px;
  flex-direction: ${(props) => (props.primary ? 'row-reverse' : 'row')};
`

const Img = styled.img`
  display: block;
  width: 40%;
  height: 300px;
  object-fit: cover;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const TextWrapper = styled.div`
  width: 80%;
  padding: 30px
  margin: auto;
  color: #37548f;
  background-color: #F9F9F9;
`
const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`
const Text = styled.div`
  margin-bottom: 20px;
  line-height: 160%;
`
const Btn = {
  marginLeft: '75%',
  width: '70px',
}

export const Products = (props: { contents: Tron[] }) => (
  <Ul>
    {props.contents.map((c) => (
      <Li key={c.id} primary={c.right}>
        <Img src={c.imageUrl} />
        <Content>
          <TextWrapper>
            <H1>{c.name}</H1>
            <Text>{c.text}</Text>
            <Button variant='info' href={c.url} style={Btn}>
              Play
            </Button>
          </TextWrapper>
        </Content>
      </Li>
    ))}
  </Ul>
)
