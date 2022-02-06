import * as React from "react";
import { Layout } from "../components/layouts/Layout";
import { Cover } from "../components/index/Cover";
import { Works } from "../components/index/Works";
import { About } from "../components/index/About";
import { Skills } from "../components/index/Skills";
import { Awords } from "../components/index/Awords";

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Cover src="/static/pic/header-image.jpg" />
        <About />
        <Skills />
        <Works />
        <Awords />
        <Cover src="/static/pic/footer-image.jpeg" />
      </Layout>
    );
  }
}
