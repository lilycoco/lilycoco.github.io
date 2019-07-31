import { WinnerCondition } from '../../models/Tictac'
import { Moves } from './Moves'
import { H2 } from './Style'

export const SwitchButton = (props: {
  onClick: () => void
  histories: { [key: string]: string[] }[]
  asc: boolean
  winner: WinnerCondition | null
  stepNumber: number
  xIsNext: boolean
  jump: (step: number) => void
}) => {
  const status = () =>
    props.winner
      ? 'Winner: ' + props.winner.mark
      : props.stepNumber < 9
      ? 'Next player: ' + (props.xIsNext ? 'X' : 'O')
      : 'Draw'

  return (
    <div style={{ marginTop: '20px' }}>
      <H2>{status()}</H2>
      <div>
        <button onClick={props.onClick} style={{ margin: '10px 0px' }}>
          Sort order
        </button>
      </div>
      <Moves {...props} onClick={(step: number) => props.jump(step)} />
    </div>
  )
}
