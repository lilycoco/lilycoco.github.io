export interface EProps {
  className: string | null
  onClick: React.MouseEventHandler
  value: string
}

export interface WinnerCondition {
  mark: string
  numbers: number[]
}

export interface SwichButtonConfig {
  onClick: () => void
  histories: { [key: string]: string[] }[]
  asc: boolean
  winner: WinnerCondition | null
  stepNumber: number
  xIsNext: boolean
  jump: (step: number) => void
}
