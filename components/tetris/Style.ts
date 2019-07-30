import styled from 'styled-components'
import { blockSize, boardWidth, boardHeight } from '../../lib/tetris'

export const BoardArea = styled.div`
  position: relative;
  width: ${blockSize * boardWidth}px;
  height: ${blockSize * boardHeight}px;
  background-color: rgb(15, 15, 27);
`
export const BoardWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
`
export const GameOverFilter = styled.div`
  color: white;
  font-size: 75px;
  padding: 35px 25px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.6);
  letter-spacing: 0.05em;
`
export const blockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']
export const Block = styled.div`
  width: ${blockSize}px;
  height: ${blockSize}px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-collapse: collapse;
  text-align: center;
  box-sizing: border-box;
  color: white;
  line-height: 30px;
  ${(p: { [key: string]: number }) =>
    p.color
      ? {
          backgroundColor: blockColors[p.color - 1],
          border: '5px outset rgba(255, 255, 255, 0.568)',
        }
      : {
          backgroundColor: 'rgb(254, 254, 254, 0)',
        }};
`
