require('./infraestructura/connexiondb');

const ProjectModel = require ('./models/proyectoModel');

const projectAguas = new ProjectModel({
  nombre: 'Proyecto de contaminacion de los rios',
  lider: 'Luis Carlos Galan Sarmiento',
  facultad: 'MicroBiologia'
})

projectAguas.save((err, document )=> {
  if(err){
    console.log(err);
    return;
  }
  else{
    console.log('Ready');
  }
})


//Hacer consultas
const consultaProyectos = async () => {
  const proyectos = await ProjectModel.find({})
  console.log(proyectos);
}

consultaProyectos()