import * as React from "react";
import { Layout } from "../components/layouts/Layout";
import { Cover } from "../components/index/Cover";
import { CardList } from "../components/index/CardList";
import { About } from "../components/index/About";

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Cover src="/static/pic/header-image.jpg" />
        <About />
        <CardList />
        <Cover src="/static/pic/footer-image.jpeg" />
      </Layout>
    );
  }
}
