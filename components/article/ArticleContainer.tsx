import * as React from "react";
import { BackButton, ArticleWrapper } from "./Style";
import Link from "next/link";
import { MarkDownPreviewer } from "./MarkDownPreviewer";
import { BlogContent } from "../../models/Blog";

export const ArticleContainer = ({ posts }: { posts: BlogContent }) => (
  <ArticleWrapper>
    <MarkDownPreviewer posts={posts} />
    <BackButton className="page-navigation code">
      <Link href="/blog">
        <a title="back to index">Back</a>
      </Link>
    </BackButton>
  </ArticleWrapper>
);
