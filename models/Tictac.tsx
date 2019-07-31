export interface EProps {
  className: string | null
  onClick: React.MouseEventHandler
  value: string
}

export interface WinnerCondition {
  mark: string
  numbers: number[]
}
