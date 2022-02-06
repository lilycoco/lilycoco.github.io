import { Block } from "./Style";
import { BoardWrapper } from "./Style";

export const Board = ({ currentBoard }: { currentBoard: number[][] }) => (
  <BoardWrapper>
    {currentBoard.map((line: number[], colNo: number) => (
      <div key={colNo} style={{ display: "flex" }}>
        {line.map((num: number, rowNo: number) => (
          <Block key={rowNo} color={num} />
        ))}
      </div>
    ))}
  </BoardWrapper>
);
