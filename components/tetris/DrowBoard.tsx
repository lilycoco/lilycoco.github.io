import { Block } from './Style'

export const DrowBoard = (props: { defaultBoard: number[][] }): any =>
  props.defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <Block key={rowNo} color={num} />
      ))}
    </div>
  ))
