import { SwichButtonConfig } from '../../models/Tictac'
import { Moves } from './Moves'
import { H2 } from './Style'
import { judgeGameStatus } from '../../lib/tictac'

export const SwitchButton = (props: SwichButtonConfig) => (
  <div style={{ marginTop: '20px' }}>
    <H2>{judgeGameStatus(props)}</H2>
    <div>
      <button onClick={props.onClick} style={{ margin: '10px 0px' }}>
        Sort order
      </button>
    </div>
    <Moves {...props} onClick={(step: number) => props.jump(step)} />
  </div>
)
