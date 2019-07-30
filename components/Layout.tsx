import React from 'react'
import { Header } from '../components/Header'
import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode
}

const MainContent = styled.main`
  padding: 75px 24px 30px;
`

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
