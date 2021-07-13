import "../styles/globals.css";
import "../styles/articles.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import React from "react";
import Head from "next/head";
import { CssBaseline, GeistProvider, Themes } from "@geist-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const myTheme1 = Themes.createFromLight({
    type: "coolTheme",
    palette: {
      success: "#6797FF",
    },
  });
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND + "/graphql",
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
  });
  return (
    <ApolloProvider client={client}>
      <GeistProvider themes={[myTheme1]} themeType="coolTheme">
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
    </ApolloProvider>
  );
}
export default MyApp;
