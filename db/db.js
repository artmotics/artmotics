import mongoose from 'mongoose';

const conectarBD = async ()=>{
    return await mongoose
    .connect(process.env.DATABASE_URL)
    .then (()=>{
        console.log("conexion exitosa")
    }).catch((e)=>{
        console.error("error conectando a la bd",e)
    })
};
export default conectarBD;