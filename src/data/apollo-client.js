import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const graphClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://possible-polecat-53.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_TOKEN,
    },
  }),
  cache: new InMemoryCache(),
});
