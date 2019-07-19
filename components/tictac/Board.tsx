import { Square } from './Square'
import styled from 'styled-components'
import { WProps } from '../../models/Tictac'

const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`

export const Board = (props: { squares: any; onClick: any; winner: WProps | null }) => {
  const win = (i: number): any =>
    props.winner &&
    props.winner.numbers &&
    props.winner.numbers.map((n: number) => i === n && ' highlight ')

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