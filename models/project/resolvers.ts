import { ProjectModel } from "./project";

const resolversProjects ={
    Query:{
        Proyectos: async (parent,args)=>{
            const proyectos = await ProjectModel.find().populate('lider').populate('objetivo');
            return proyectos;
        },        
    },
    Mutation:{
        crearProyecto: async (parent,args)=>{
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                estado:args.estado,
                fase:args.fase,
                lider:args.lider,       
                objetivo:args.objetivo,
            });
            return proyectoCreado;
        },
    },
}
export{resolversProjects};