import { Content, TextWrapper, H1, Text } from './Style'
import { Buttons } from './Buttons'
import { Tron } from '../../models/Tron'

export const ContentBox = (props: { item: Tron; onClick: (icon: string, id: number) => void }) => (
  <Content>
    <TextWrapper>
      <H1>{props.item.name}</H1>
      <Text>{props.item.text}</Text>
      <Buttons item={props.item} onClick={props.onClick} />
    </TextWrapper>
  </Content>
)
