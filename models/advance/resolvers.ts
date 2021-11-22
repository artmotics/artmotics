import { AdvanceModel } from "./advance";

const resolversAdvances ={
    Query:{
        Avance: async (parent,args)=>{
            const avances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },        
    },
    Mutation:{
        crearAvance: async (parent,args)=>{
            const avanceCreado = await AdvanceModel.create({
                fecha:args.fecha,
                descripcion:args.descripcion,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor,
            });
            return avanceCreado;
        },
    },
}
export{resolversAdvances};