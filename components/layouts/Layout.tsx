import React from "react";
import { Header } from "./header/Header";
import { MainContent } from "./Style";
import { Footer } from "./footer/Footer";
import { LayoutProps } from "../../models/Layouts";
import { StickyHeader } from "./header/StickyHeader";

export const Layout = ({ children }: LayoutProps) => (
  // export const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <StickyHeader />
    <MainContent>{children}</MainContent>
    <Footer />
  </div>
);
