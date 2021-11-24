import { connect } from "mongoose";
//const {connect} = require('mongoose') Es igual a la primera linea de import solo que de otra forma
// este codigo es para conectar a la base de datos
const conectarBD = async () => {
  return await connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Conexion Exitosa");
    })
    .catch((e) => {
      console.error("Error conectando a la BD", e);
    });
};

export default conectarBD;
