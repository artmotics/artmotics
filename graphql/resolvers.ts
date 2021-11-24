const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const Usuarios = [
        {
          nombre: "Jesus",
        },
        {
          nombre: "Juan",
        },
        {
          nombre: "Pedro",
        },
      ];
      return Usuarios;
    },
  },
};

export { resolvers };
