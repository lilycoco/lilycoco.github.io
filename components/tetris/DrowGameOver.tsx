import styled from 'styled-components'

const GameOver = styled.div`
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

export const DrowGameOver = (props: { ref: any }) => {
  clearInterval(props.ref)
  return <GameOver>Game Over</GameOver>
}
