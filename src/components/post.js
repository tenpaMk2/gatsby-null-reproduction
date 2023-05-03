import React from "react";
import { PostHeader } from "./post-header";

export const Post = ({
  date,
  heroImage,
  heroImageAlt,
  isPostPage,
  slug,
  tags,
  title,
}) => (
  <article
    className="flex min-w-0 basis-full flex-col gap-4 overflow-x-auto rounded-xl bg-slate-700 p-2 md:p-6"
    itemScope
    itemType="https://schema.org/BlogPosting"
  >
    <PostHeader
      {...{
        date,
        heroImage,
        heroImageAlt,
        isPostPage,
        slug,
        tags,
        title,
      }}
    />
  </article>
);
