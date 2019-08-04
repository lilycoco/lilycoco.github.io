import { btnStyle } from '../../style/Tetris'
import { ButtonWrapper } from './Style'

export const Buttons = (props: {
  toggleRunning: () => void
  running: boolean
  clearAll: () => void
}) => {
  return (
    <ButtonWrapper>
      <button className='btn btn-primary' onClick={props.toggleRunning} style={btnStyle}>
        {props.running ? 'Stop' : 'Start'}
      </button>
      <button className='btn btn-primary' onClick={props.clearAll} style={btnStyle}>
        Clear
      </button>
    </ButtonWrapper>
  )
}
