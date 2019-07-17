export const brockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']
import styled from 'styled-components'

export const Block = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-collapse: collapse;
  text-align: center;
  box-sizing: border-box;
  color: white;
  line-height: 30px;
`

export const DrowBoard = (defaultBoard: number[][]) =>
  defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <Block
          key={rowNo}
          style={
            num
              ? {
                  backgroundColor: brockColors[num - 1],
                  border: '5px outset rgba(255, 255, 255, 0.568)',
                }
              : {
                  backgroundColor: 'rgb(254, 254, 254, 0)',
                }
          }
        ></Block>
      ))}
    </div>
  ))
