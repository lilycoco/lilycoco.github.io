import { Square } from './Square'
import { WProps } from '../../models/Tictac'
import { BoardRow } from './Style'

export const Board = (props: { squares: any; onClick: any; winner: WProps | null }) => {
  const win = (i: number): any =>
    props.winner &&
    props.winner.numbers &&
    props.winner.numbers.map((n: number) => i === n && 'yellow')

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
