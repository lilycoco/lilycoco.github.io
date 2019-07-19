import { EProps } from '../../models/Tictac'
import { SquareButton } from './Style'

export const Square = (props: EProps) => {
  return (
    <SquareButton highlight={props.className} onClick={props.onClick}>
      {props.value}
    </SquareButton>
  )
}
