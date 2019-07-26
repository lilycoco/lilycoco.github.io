import { btnStyle } from '../../styled/Tetris'

export const Buttons: any = (props: { toggleRunning: any; running: boolean; clearAll: any }) => {
  return (
    <div>
      <button className='btn btn-primary' onClick={props.toggleRunning} style={btnStyle}>
        {props.running ? 'Stop' : 'Start'}
      </button>
      <button className='btn btn-primary' onClick={props.clearAll} style={btnStyle}>
        Clear
      </button>
    </div>
  )
}
