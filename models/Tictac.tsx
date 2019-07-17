export interface EProps {
  className: 'highlight' | null | undefined
  onClick: React.MouseEventHandler
  value: string
}

export interface WProps {
  mark?: string
  numbers?: number[]
}

export interface SProps {
  onClick?: any
  histories: any
  asc: boolean
  winner?: WProps | null
  stepNumber: number
  xIsNext?: boolean
  jump?: any
}
