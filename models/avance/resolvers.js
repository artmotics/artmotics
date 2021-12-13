import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    Avance: async (parent, args) => {
      const avance = await ModeloAvance.findOne({ _id: args._id });
      return avance;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarAvance: async (parent, args) => {
      const avanceEditado = await ModeloAvance.findByIdAndUpdate(
        args._id,
        {
          fecha: args.fecha,
          descripcion: args.descripcion,
          proyecto: args.proyecto,

        },
        { new: true }
      );
      return avanceEditado;
      
    },
  },
};



export { resolversAvance };
