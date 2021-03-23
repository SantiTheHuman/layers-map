import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
  },
  cache: new InMemoryCache(),
});

export const hasuraAPI = new ApolloClient({
  link: new HttpLink({
    uri: "https://possible-polecat-53.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_TOKEN,
    },
  }),
  cache: new InMemoryCache(),
});
