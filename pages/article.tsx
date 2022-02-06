import { Layout } from "../components/layouts/Layout";
import { MainTitle } from "../components/Style";
import { getBlogContent } from "../lib/blog";
import { ArticleContainer } from "../components/article/ArticleContainer";
import fm from "front-matter";
import { BlogFrontMatterResult, BlogContent } from "../models/Blog";

const Article = (props: BlogContent) => (
  <Layout>
    <MainTitle>Blog</MainTitle>
    <ArticleContainer posts={props} />
  </Layout>
);

const getInitialProps = async ({ query }: { query: { id: string } }) => {
  if (query.id === undefined) {
    return {
      title: "",
      date: "",
      html: "",
    };
  }
  const fname = `${query.id}.md`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const post: any = await getBlogContent(fname);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meta: BlogFrontMatterResult<any> = fm(post);
  return {
    title: meta.attributes.title,
    date: fname.split("-")[0],
    html: meta.body,
  };
};

Article.getInitialProps = getInitialProps;

export default Article;
