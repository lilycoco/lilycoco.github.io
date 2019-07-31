import { Content, TextWrapper, ProductName, Text } from './Style'
import { Buttons } from './Buttons'
import { ProductConstructor } from '../../models/Home'

export const ContentBox = (props: {
  item: ProductConstructor
  onClick: (icon: string, id: number) => void
}) => (
  <Content>
    <TextWrapper>
      <ProductName>{props.item.name}</ProductName>
      <Text>{props.item.text}</Text>
      <Buttons item={props.item} onClick={props.onClick} />
    </TextWrapper>
  </Content>
)
