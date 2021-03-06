import { IconWrapper, Icon, Num } from './Style'
import { ProductConfig } from '../../models/Index'
import { countLikePoint } from '../../lib/index'

export const LikeButton = ({ item, icon, onClick }: ProductConfig) => (
  <IconWrapper onClick={() => onClick(icon, item.id)}>
    <Icon src={{ icon: icon, num: countLikePoint(item, icon) }} />
    <Num>{countLikePoint(item, icon)}</Num>
  </IconWrapper>
)
