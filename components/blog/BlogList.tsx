import { MainContents } from "../Style";
import { ListWrapper } from "./Style";
import { BlogLink } from "./BlogLink";
import { BlogConfig } from "../../models/Blog";

export const BlogList = ({ posts }: { posts: BlogConfig[] }) => (
  <MainContents>
    <ListWrapper>
      {posts.map((post: BlogConfig, i: number) => (
        <BlogLink post={post} prev={posts[i - 1]} key={post.href} />
      ))}
    </ListWrapper>
  </MainContents>
);
