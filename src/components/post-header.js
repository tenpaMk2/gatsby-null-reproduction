import React from "react";
import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  getSrc,
  StaticImage,
} from "gatsby-plugin-image";
import { slugify } from "../libs/slugify";
import { Clock } from "./clock";
import noImage from "../images/no-image.png";

export const PostHeader = ({ date, heroImage, heroImageAlt, tags, title }) => {
  const tagLis = tags.map(({ name, slug }) => (
    <li key={slug}>
      <Link to={slugify(``, `tags`, slug)} className="underline">
        {name}
      </Link>
    </li>
  ));

  tagLis.unshift(<li key="🏷️">🏷️</li>);

  const image = getImage(heroImage);
  const imageComponent = image ? (
    <>
      <meta itemProp="image" content={getSrc(heroImage)} />
      <GatsbyImage
        image={image}
        alt={heroImageAlt}
        objectPosition="50% 0%"
        className="isolate aspect-video basis-full rounded shadow-[0_0_1rem_rgb(0%_0%_0%_/_.5)]" // `isolate` is needed to work around [iOS bug](https://gotohayato.com/content/556/) .
      />
    </>
  ) : (
    <>
      <meta itemProp="image" content={noImage} />
      <StaticImage
        src="../images/no-image.png"
        alt="No hero image"
        className="isolate aspect-video basis-full rounded shadow-[0_0_1rem_rgb(0%_0%_0%_/_.5)]" // `isolate` is needed to work around [iOS bug](https://gotohayato.com/content/556/) .
      />
    </>
  );

  return (
    <header className="flex flex-col gap-4">
      <div
        className="hidden"
        itemProp="author"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="https://example.com" />
        <meta itemProp="url" content="tenpaMk2" />
      </div>

      <div className="flex w-full grow flex-wrap gap-4">
        <div className="flex basis-full flex-wrap gap-2">
          <Clock {...{ date }} />
          <div className="border-r border-b border-slate-500" />
          <div className="flex grow basis-1/2 content-center">
            <h1 className="m-0 flex items-center p-0 text-lg font-bold md:text-4xl">
              {title}
            </h1>
          </div>
        </div>
        <ol className="flex basis-full flex-wrap gap-4">{tagLis}</ol>
      </div>
      <div className="flex justify-center">{imageComponent}</div>
    </header>
  );
};
