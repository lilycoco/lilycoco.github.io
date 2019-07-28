export interface EProps {
  className: string | null
  onClick: React.MouseEventHandler
  value: string
}

export interface WProps {
  mark?: string
  numbers?: number[]
}

export interface SProps {
  onClick?: any
  histories: { [key: string]: string[] }[]
  asc: boolean
  winner?: WProps | null
  stepNumber: number
  xIsNext?: boolean
  jump?: any
}
