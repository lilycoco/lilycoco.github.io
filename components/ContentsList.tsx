import { Content } from '../models/Content'
import styled from 'styled-components'

const Ul = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const Li = styled.li`
  margin: 12px;
`

const Img = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
`

const Name = styled.span`
  color: #778899;
  font-size: 14px;
`

export const ContentsList = (props: { contents: Content[] }) => (
  <Ul>
    {props.contents.map((c) => (
      <Li key={c.id}>
        <Name>{c.name}</Name>
        <Img src={c.imageUrl} />
      </Li>
    ))}
  </Ul>
)
