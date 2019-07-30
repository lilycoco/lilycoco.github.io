import styled from 'styled-components'

export const BoardArea = styled.div`
  position: relative;
  width: 300px;
  background-color: rgb(15, 15, 27);
  height: 600px;
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
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.6);
  height: 100%;
  letter-spacing: 0.05em;
`
const blockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']
export const Block = styled.div`
  width: 30px;
  height: 30px;
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
