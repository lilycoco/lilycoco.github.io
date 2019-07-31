import { IconWrapper, Icon, Num } from './Style'
import { ProductConstructor } from '../../models/Home'
import { countLikePoint } from '../../lib/home'

export const LikeButton = (props: {
  content: ProductConstructor
  icon: string
  onClick: (icon: string, id: number) => void
}) => {
  const { content, icon } = props
  return (
    <IconWrapper onClick={() => props.onClick(icon, content.id)}>
      <Icon src={{ icon: icon, num: countLikePoint(content, icon) }} />
      <Num>{countLikePoint(content, icon)}</Num>
    </IconWrapper>
  )
}
