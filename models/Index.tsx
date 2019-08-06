export interface ProductConstructor {
  id: number
  name: string
  text: string
  url: string
  imgSrc: string
  heart: number
  like: number
  iconImg: string
  date: string
}

export interface ProductConfig {
  item: ProductConstructor
  icon?: any | string
  onClick: (icon: string, id: number) => void
}
