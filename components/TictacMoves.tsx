import { SProps } from '../models/Tictac'

export const Moves = (props: SProps): any => {
  const key = [...props.histories.keys()]
  return key.map((step: string | any) => {
    !props.asc && (step = props.histories.length - step - 1)
    const bold = props.stepNumber === step ? 'bold' : 'unbold'
    const desc = step ? 'Go to move #' + step : 'Go to game start'
    return (
      <li key={step}>
        <button className={bold} onClick={() => props.onClick(step)}>
          {desc}
        </button>
        <style>
          {`
              .bold {
                font-weight: bold;
              }
            `}
        </style>
      </li>
    )
  })
}
