import "../styles/globals.css";
import "../styles/articles.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://img.icons8.com/fluent/96/000000/project.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
