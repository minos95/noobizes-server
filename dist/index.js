import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./db.js";
import { data } from "./db2.js";
import { typeDefs } from "./schema.js";
const resolvers = {
    Query: {
        matchs: () => db.matchs,
        getMatchDetail: () => data,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
