import { SProps } from '../../models/Tictac'
import { StepButton } from './Style'

export const Moves = (props: SProps): any => {
  const key = [...props.histories.keys()]
  return key.map((step: string | any) => {
    !props.asc && (step = props.histories.length - step - 1)
    const desc = step ? 'Go to move #' + step : 'Go to game start'
    return (
      <li key={step}>
        <StepButton onClick={() => props.onClick(step)} stepNumber={props.stepNumber} step={step}>
          {desc}
        </StepButton>
      </li>
    )
  })
}
