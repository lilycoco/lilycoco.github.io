import { Square } from "./Square";
import { WinnerCondition } from "../../models/Tictac";
import { BoardRow, BoardWrapper } from "./Style";

export const Board = ({
  squares,
  onClick,
  winner,
}: {
  squares: string[];
  onClick: (i: number) => void;
  winner: WinnerCondition | null;
}) => {
  const win = (i: number): string | null => {
    let highlight = null;
    winner &&
      winner.numbers &&
      winner.numbers.map((n: number) => i === n && (highlight = "yellow"));
    return highlight;
  };

  return (
    <BoardWrapper className="game-board">
      {[0, 3, 6].map((line) => (
        <BoardRow key={line}>
          {[line, line + 1, line + 2].map((block) => (
            <Square
              key={block}
              value={squares[block]}
              onClick={() => onClick(block)}
              className={win(block)}
            />
          ))}
        </BoardRow>
      ))}
    </BoardWrapper>
  );
};
