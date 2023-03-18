const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  enum PetType {
    CAT
    DOG
    BIRD
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: PetType!
    img: String!
    owner: User!
  }

  input PetInput {
    name: String
    type: PetType
  }

  type Query {
    pets(input: PetInput): [Pet]!
    users: [User]!
    user(id: ID!): User
    pet(id: ID!): Pet
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  input NewUserInput {
    username: String!
  }

  input UpdateUserInput {
    id: ID!
    username: String
  }

  input UpdatePetInput {
    id: ID!
    name: String
    type: PetType
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
    newUser(input: NewUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    updatePet(input: UpdatePetInput!): Pet!
  }
`;

module.exports = typeDefs;
