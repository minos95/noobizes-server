export const typeDefs = `#graphql
type Match {
  id:ID!
  
}

type Query {
    matchs: [Match]
}
`;
