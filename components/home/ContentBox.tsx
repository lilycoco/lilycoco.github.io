import { Content, TextWrapper, ProductName, Text } from './Style'
import { Buttons } from './Buttons'
import { ProductConfig } from '../../models/Home'

export const ContentBox = ({ item, onClick }: ProductConfig) => (
  <Content>
    <TextWrapper>
      <ProductName>{item.name}</ProductName>
      <Text>{item.text}</Text>
      <Buttons item={item} onClick={onClick} />
    </TextWrapper>
  </Content>
)
