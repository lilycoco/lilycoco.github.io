import React from 'react'
import { Header } from './header/Header'
import { MainContent } from './Style'
import { Footer } from './footer/Footer'
interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <MainContent>{children}</MainContent>
    <Footer />
  </div>
)

// export const Layout: React.SFC<LayoutProps> = ({ children }) => (
//   <div>
//     <Header />
//     <MainContent>{children}</MainContent>
//   </div>
// )
