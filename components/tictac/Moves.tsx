import { StepButton } from './Style'

export const Moves = (props: {
  onClick: (step: number) => void
  histories: { [key: string]: string[] }[]
  asc: boolean
  stepNumber: number
}) => {
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
