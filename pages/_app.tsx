import "../styles/globals.css";
import "../styles/articles.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import React from "react";
import Head from "next/head";
import { CssBaseline, GeistProvider } from "@geist-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <Head>
        <link
          rel="icon"
          href="https://img.icons8.com/fluent/96/000000/project.png"
        />
      </Head>
      <style>
        {`
          ::selection{
            background-color:lightblue
          }
          * {
              font-family: "Nunito Sans", sans-serif;
          }
          a {
            color: black; 
          }
        `}
      </style>
      <Navbar />
      <Component {...pageProps} />
      <CssBaseline />
    </GeistProvider>
  );
}
export default MyApp;
