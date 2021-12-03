import { ProjectModel } from "./project.js";
// populate('lider').populate('objetivo')
const resolversProjects ={
    Query:{
        Proyectos: async (parent,args)=>{
            const proyectos = await ProjectModel.find().populate('lider').populate('avance');
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
        editarProyecto: async (parent,args)=>{
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id,{
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                estado:args.estado,
                fase:args.fase,
                lider:args.lider,       
            });
            return proyectoEditado;
        },
    },
}
export{resolversProjects};