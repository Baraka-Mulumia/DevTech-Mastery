const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const users = [
  {
    id: '1',
    email: 'baraka@gmail.com',
    avatar:
      'https://www.iambaraka.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-image-dark.142114aa.png&w=1920&q=75',
    friends: [],
  },
  {
    id: '2',
    email: 'baraka2@gmail.com',
    avatar:
      'https://www.iambaraka.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-image-dark.142114aa.png&w=1920&q=75',
    friends: [],
  },
  {
    id: '3',
    email: 'baraka3@gmail.com',
    avatar:
      'https://www.iambaraka.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-image-dark.142114aa.png&w=1920&q=75',
    friends: [],
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    avatar: String!
    friends: [User]!
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: (parent, args, context, info) => {
      return users.find((user) => user.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
