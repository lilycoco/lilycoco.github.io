export interface WinnerCondition {
  mark: string
  numbers: number[]
}

export interface ButtonsConfig {
  onClick: () => void
  histories: { [key: string]: string[] }[]
  asc: boolean
  winner: WinnerCondition | null
  stepNumber: number
  xIsNext: boolean
  jump: (step: number) => void
}

export interface TimeTravelersConfig {
  onClick: (step: number) => void
  histories: { [key: string]: string[] }[]
  asc: boolean
  stepNumber: number
}
