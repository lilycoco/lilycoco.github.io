import * as React from 'react'
import { Tron } from '../models/Tron'
import styled from 'styled-components'
import Link from 'next/link'

const Ul = styled.ul`
  list-style: none;
`
const Li = styled.li<{ primary: boolean }>`
  margin: auto;
  display: flex;
  width: 80%;
  border-top: solid 1px #6e6e6e;
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
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  width: 80px;
`
const Icon = styled.img`
  width: 27px;
  height: 27px;
  display: block;
  &:hover {
    width: 30px;
    height: 30px;
  }
`
const Num = styled.div`
  font-size: 23px;
  text-align: center;
  width: 35px;
  user-select: none;
`
const btnStyle: React.CSSProperties = {
  marginLeft: '40%',
  width: '70px',
}

const likeAction = (like: number) => {
  return like ? '/static/like_on.png' : '/static/like_off.png'
}

const heartAction = (heart: number) => {
  return heart ? '/static/heart_on.png' : '/static/heart_off.png'
}

export const Products: React.SFC<{ contents: Tron[]; onClick: any }> = (props) => (
  <Ul>
    {props.contents.map((c, index) => (
      <Li key={c.id} primary={c.right}>
        <Img src={c.imgSrc} />
        <Content>
          <TextWrapper>
            <H1>{c.name}</H1>
            <Text>{c.text}</Text>
            <BtnWrapper>
              <IconWrapper onClick={() => props.onClick(index)}>
                <Icon src={likeAction(c.like)} />
                <Num>{c.like}</Num>
              </IconWrapper>
              <IconWrapper onClick={() => props.onClick(index + 10)}>
                <Icon src={heartAction(c.heart)} />
                <Num>{c.heart}</Num>
              </IconWrapper>
              <Link href={c.url}>
                <a className='btn btn-primary' style={btnStyle}>
                  Play
                </a>
              </Link>
            </BtnWrapper>
          </TextWrapper>
        </Content>
      </Li>
    ))}
  </Ul>
)
