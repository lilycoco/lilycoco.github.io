import { SProps } from '../../models/Tictac'
import { Moves } from './TictacMoves'

export const SwichButton = (props: SProps) => {
  const status = () =>
    props.winner
      ? 'Winner: ' + props.winner.mark
      : props.stepNumber < 9
      ? 'Next player: ' + (props.xIsNext ? 'X' : 'O')
      : 'Draw'

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ fontSize: '20px' }}>{status()}</div>
      <div>
        <button onClick={props.onClick} style={{ margin: '10px 0px' }}>
          Sort order
        </button>
      </div>
      <ol>
        <Moves
          histories={props.histories}
          asc={props.asc}
          stepNumber={props.stepNumber}
          onClick={(step: number) => props.jump(step)}
        />
      </ol>
    </div>
  )
}
