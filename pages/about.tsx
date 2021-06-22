import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div className="about">
      <Head>
        <title>Home</title>

        <meta name="title" content="New Solutions Project" />
        <meta name="description" content="The New Solutions Project." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="New Solutions Project" />
        <meta property="og:description" content="The New Solutions Project." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="New Solutions Project" />
        <meta
          property="twitter:description"
          content="The New Solutions Project."
        />
      </Head>
      <p>Hello from about</p>
    </div>
  );
};

export default about;
