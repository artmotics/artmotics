require('./infraestructura/connexiondb');
const ProjectModel = require ('./models/proyectoModel');
const express = require('express');
const { response } = require('express');

const api = express();

const projectAguas = new ProjectModel({
  nombre: 'Proyecto de contaminacion de los rios',
  lider: 'Luis Carlos Galan Sarmiento',
  facultad: 'MicroBiologia'
})

/* projectAguas.save((err, document )=> {
  if(err){
    console.log(err);
    return;
  }
  else{
    console.log('Ready');
  }
}) */


//Hacer consultas
const consultaProyectos = async () => {
  return await ProjectModel.find({/* Aqui se indica el json para hacer la busqueda */})
}
 

api.get('/proyectos', (request, response) => {
  consultaProyectos().then(function (resultado) {
    response.json({proyectos:resultado})
  })
})

api.listen('8090')