import styled from 'styled-components'

export const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`
export const H2 = styled.h2`
  font-size: 20px;
  margin-top: 15px;
`
export const StepButton = styled.button<{ onClick: any; stepNumber: number; step: number }>`
  font-weight: ${(props: any) => (props.stepNumber === props.step ? 'bold' : null)};
`
export const SquareButton = styled.button<{ highlight: string | undefined | null; onClick: any }>`
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
  background: ${(props: any) => (props.highlight ? props.highlight : '#fff')};
  &:focus {
    outline: none;
    background: #ddd;
  }
`
