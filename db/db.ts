import { connect } from 'mongoose'
//const {connect} = require('mongoose') Es igual a la primera linea de import solo que de otra forma
// este codigo es para conectar a la base de datos
const conectarBD = async () => {
    return await connect(
      "mongodb+srv://artmotics2021:artmotics2021@gestiondeproyectosmisio.sicbh.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Conexion Exitosa")
    }).catch(e => {
        console.error("Error conectando a la BD",e)
    })
}

export default conectarBD;