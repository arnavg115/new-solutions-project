import Head from "next/head";
import React, { FC } from "react";

interface props {
  title: string;
}

export const Header: FC<props> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={`New Solutions Project | ${title}`} />
        <meta name="description" content="The New Solutions Project." />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://new-solutions-project.vercel.app/"
        />
        <meta
          property="og:title"
          content={`New Solutions Project | ${title}`}
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/fluent/96/000000/project.png"
        />
        <meta
          property="og:description"
          content={`New Solutions Project | ${title}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content={`New Solutions Project | ${title}`}
        />
        <meta
          property="twitter:description"
          content="The New Solutions Project."
        />
        <meta
          property="twitter:image"
          content="https://img.icons8.com/fluent/96/000000/project.png"
        />
      </Head>
    </div>
  );
};
