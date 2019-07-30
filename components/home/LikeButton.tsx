import { IconWrapper, Icon, Num } from './Style'
import { Tron } from '../../models/Tron'

export const LikeButton = (props: {
  content: Tron
  icon: string
  onClick: (icon: string, id: number) => void
}) => {
  const { content, icon } = props
  const point = () => {
    switch (icon) {
      case 'like':
        return content.like
      case 'heart':
        return content.heart
    }
    return 0
  }
  return (
    <div>
      <IconWrapper onClick={() => props.onClick(props.icon, content.id)}>
        <Icon src={{ icon: icon, num: point() }} />
        <Num>{point()}</Num>
      </IconWrapper>
    </div>
  )
}
