import React from 'react'
import { Header } from '../components/Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
)
