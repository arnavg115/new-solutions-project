import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
