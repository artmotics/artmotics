import { ObjectiveModel } from "../models/objetive";
import { ProjectModel } from "../models/project";
import { UserModel } from "../models/users";

const resolvers ={
    Query:{
        Usuarios: async (parent,args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent,args)=>{
            const usuario = await UserModel.findOne({_id:args._id});
            return usuario;

        },
        Proyectos: async (parent,args)=>{
            const proyectos = await ProjectModel.find().populate('lider').populate('objetivo');
            return proyectos;
        },
        Objetivos: async (parent,args)=>{
            const objetivos = await ObjectiveModel.find();
            return objetivos;
        },
        
        
    },
    Mutation:{
        crearUsuario: async (parent,args)=>{
            const usuarioCreado = await UserModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
            });
            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado=args.estado;
            };
            return usuarioCreado;
        },
        eliminarUsuario: async (parent,args)=>{
            if (Object.keys(args).includes('_id')){
                const usuarioEliminado = await UserModel.findOneAndDelete ({_id:args._id});
                return usuarioEliminado;
            }else if (Object.keys(args).includes('correo')){
                const usuarioEliminado = await UserModel.findOneAndDelete ({correo:args.correo});
                return usuarioEliminado;
            };
        },
        editarUsuario: async (parent,args)=>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id,{
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol, 
                estado:args.estado,
            });
            return usuarioEditado;
        },
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
export{resolvers};