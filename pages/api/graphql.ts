import { ApolloServer, gql } from "apollo-server-micro";
import { buildSchemaSync } from "type-graphql";
import { MainResolver } from "../../type-gql/MainResolver";

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [MainResolver],
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
