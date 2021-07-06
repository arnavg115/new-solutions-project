import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/graphql"
      : "https://new-solutions-project.vercel.app/api/graphql",
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});
