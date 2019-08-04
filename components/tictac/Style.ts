import styled from 'styled-components'

export const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`
export const BoardWrapper = styled.div`
  margin: 30px;
`
export const StepButton = styled.button<{ onClick: () => void; stepNumber: number; step: number }>`
  font-weight: ${(props) => (props.stepNumber === props.step ? 'bold' : null)};
`
export const SquareButton = styled.button<{
  highlight: string | null
  onClick: React.MouseEventHandler
}>`
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  background: ${(props) => (props.highlight ? props.highlight : '#fff')};
  &:focus {
    outline: none;
    background: #ddd;
  }
`
export const GameWrapper = styled.div`
  display: flex;
`
export const SwitchButtonWrapper = styled.div`
  margin: 0 30px;
`
