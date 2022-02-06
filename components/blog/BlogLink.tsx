import Link from "next/link";
import moment from "moment";
import { BlogTitle, Year } from "./Style";
import { Divider } from "../Style";
import { BlogConfig } from "../../models/Blog";

export const BlogLink = ({
  post,
  prev,
}: {
  post: BlogConfig;
  prev: BlogConfig;
}) => {
  const year = post.date.substr(0, 4);
  const prevYear = prev ? prev.date.substr(0, 4) : null;
  return (
    <li>
      {year !== prevYear ? (
        <div>
          <Year className="code">{year}</Year>
          <Divider />
        </div>
      ) : null}
      <BlogTitle>
        {post.href && (
          <Link
            as={"/blog/" + post.href}
            href={post.href ? `/article?id=${post.href}` : "/"}
          >
            <a>{post.title}</a>
          </Link>
        )}
        <div className="post-date code">
          {moment(post.date).format("MMM DD")}
        </div>
      </BlogTitle>
    </li>
  );
};
