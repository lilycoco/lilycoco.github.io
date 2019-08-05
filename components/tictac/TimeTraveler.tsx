import { StepButton } from './Style'
import { TimeTravelersConfig } from '../../models/Tictac'

export const TimeTraveler = (props: TimeTravelersConfig) => {
  const key = [...props.histories.keys()]
  return (
    <ol>
      {key.map((step: number) => {
        !props.asc && (step = props.histories.length - step - 1)
        const desc = step ? 'Go to move #' + step : 'Go to game start'
        return (
          <li key={step}>
            <StepButton
              onClick={() => props.onClick(step)}
              stepNumber={props.stepNumber}
              step={step}
            >
              {desc}
            </StepButton>
          </li>
        )
      })}
    </ol>
  )
}
