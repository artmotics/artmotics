const mongoose = require ('mongoose');

//link base de datos
const urlDB = 'mongodb+srv://admin:AdminProyectos@gestionproyectoartmotic.2vr9o.mongodb.net/artmoticsdb?retryWrites=true&w=majority'
mongoose.connect(urlDB);

//Verificar la connexion
const mongoDB = mongoose.connection;
mongoDB.on('open', _=>{
  console.log('Succes connect DB');
})
