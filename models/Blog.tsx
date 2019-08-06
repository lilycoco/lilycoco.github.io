export interface BlogConfig {
  href: string
  title: string
  date: string
}

export interface BlogFrontMatterResult<T> {
  readonly attributes: T
  readonly body: string
  readonly frontmatter?: string
}

export interface BlogContent {
  title: string
  date: number
  html: string
}
