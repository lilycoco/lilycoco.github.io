import { SwichButtonConfig } from '../../models/Tictac'
import { Moves } from './Moves'
import { SwitchButtonWrapper } from './Style'
import { judgeGameStatus } from '../../lib/tictac'

export const SwitchButton = (props: SwichButtonConfig) => (
  <SwitchButtonWrapper>
    <h4>{judgeGameStatus(props)}</h4>
    <div>
      <button onClick={props.onClick} style={{ margin: '10px 0px' }}>
        Sort order
      </button>
    </div>
    <Moves {...props} onClick={(step: number) => props.jump(step)} />
  </SwitchButtonWrapper>
)
