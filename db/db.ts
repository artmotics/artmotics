import {connect} from 'mongoose';

const conectarBD = async ()=>{
    return await connect(
        "mongodb+srv://admin:AdminProyectos@gestionproyectoartmotic.2vr9o.mongodb.net/GestionProyectoArtmotics?retryWrites=true&w=majority"
    ).then (()=>{
        console.log("conexion exitosa")
    }).catch((e)=>{
        console.error("error conectando a la bd",e)
    })
};
export default conectarBD;