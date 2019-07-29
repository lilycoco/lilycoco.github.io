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

  return (
    <div className='game-board'>
      <div>
        {[0, 3, 6].map((line) => (
          <BoardRow key={line}>
            {[line, line + 1, line + 2].map((block) => (
              <Square
                key={block}
                value={props.squares[block]}
                onClick={() => props.onClick(block)}
                className={win(block)}
              />
            ))}
          </BoardRow>
        ))}
      </div>
    </div>
  )
}
