import { Square } from './Square'
import { WProps } from '../../models/Tictac'
import { BoardRow } from './Style'

export const Board = (props: {
  squares: string[]
  onClick: (i: number) => void
  winner: WProps | null
}) => {
  const win = (i: number): string | null => {
    let highlight = null
    props.winner &&
      props.winner.numbers &&
      props.winner.numbers.map((n: number) => i === n && (highlight = 'yellow'))
    return highlight
  }

  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} className={win(i)} />
  )

  return (
    <div className='game-board'>
      <div>
        <BoardRow>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </BoardRow>
      </div>
    </div>
  )
}
