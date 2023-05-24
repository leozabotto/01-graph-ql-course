import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      height: Float
      married: Boolean!
      arrayStrings: [String!]
    }
  `,
  resolvers: {
    Query: {
      id: () => '1',
      name: () => 'Leo',
      age: () => 20,
      height: () => 1.82,
      married: () => false,
      arrayStrings: () => ['A', 'B'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
