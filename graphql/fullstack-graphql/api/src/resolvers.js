/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */
module.exports = {
  Query: {
    pets: (_, { input }, ctx) => {
      if (input) {
        const { name, type } = input;

        if (type && !name) {
          return ctx.models.Pet.findMany({ type });
        }

        if (name && !type) {
          return ctx.models.Pet.findMany({ type });
        }

        if (name && type) {
          return ctx.models.Pet.findMany({ type, name });
        }
      }

      return ctx.models.Pet.findMany();
    },
    users: (_, __, ctx) => {
      return ctx.models.User.findMany();
    },
    user: (_, { id }, ctx) => {},
    pet: (_, { id }, ctx) => {
      return ctx.models.Pet.findOne({ id });
    },
  },
  Mutation: {
    newPet: (_, { input }, ctx) => {
      return ctx.models.Pet.create(input);
    },
    newUser: (_, { input }, ctx) => {
      return ctx.models.User.create(input);
    },

    updateUser: (_, { input }, ctx) => {},
    updatePet: (_, { input }, ctx) => {
      return ctx.models.Pet.findByIdAndUpdate(input.id, {
        ...input,
      });
    },
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300';
    },
    owner(pet, _, ctx) {
      return ctx.models.User.findOne({ id: pet.owner });
    },
  },
  User: {
    pets(user, _, ctx) {
      return ctx.models.Pet.findMany({ owner: user.id });
    },
  },
};
