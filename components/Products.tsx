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
  width: 40%;
  height: auto;
  object-fit: contain;
`
const Content = styled.div`
  width: 60%;
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
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 27px;
  height: 27px;
  display: block;
  margin-left: 15px;
`
const Num = styled.div`
  font-size: 23px;
  text-align: center;
  width: 35px;
`
const Btn = {
  marginLeft: '40%',
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
            <BtnWrapper>
              <Icon src='/static/like_off.png' />
              <Num>{c.like}</Num>
              <Icon src='/static/heart_off.png' />
              <Num>{c.heart}</Num>
              <Button variant='primary' href={c.url} target='_blank' style={Btn}>
                Play
              </Button>
            </BtnWrapper>
          </TextWrapper>
        </Content>
      </Li>
    ))}
  </Ul>
)
