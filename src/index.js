import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User!]
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asaf9871',
          userName: 'leozabotto',
        };
      },
      users: () => {
        return [
          {
            id: 'asaf9871',
            userName: 'leozabotto',
          },
          {
            id: 'asaf9872',
            userName: 'leozabotto2',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
