import React from 'react'
import { Header } from './Header'
import { MainContent } from './Style'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <MainContent>{children}</MainContent>
  </div>
)

// export const Layout: React.SFC<LayoutProps> = ({ children }) => (
//   <div>
//     <Header />
//     <MainContent>{children}</MainContent>
//   </div>
// )
