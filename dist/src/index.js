"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = __importDefault(require("./graphql/schema"));
const resolvers = {};
const server = new server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers,
});
const { url } = await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
//# sourceMappingURL=index.js.map