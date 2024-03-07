//se crea la instancia express requiriendo el modulo express 
const express = require('express');
const AutorModel = require('./Squemas/AutorModel');
require('./config');
//se crea la instancia app que es la que se va a utilizar para crear el servidor
const app = express();
//creamos el router de la aplicacion
const router=express.Router();
//metodo para crear un autor
router.post('/autor', async (req,res)=>{
    const body=req.body;
    const respuesta= await AutorModel.create(body);
    res.send(respuesta);
});
router.get('/autor', async (req,res)=>{
  const respuesta= await AutorModel.find().exec();
  res.send(respuesta);
});
router.get('/autor/:id', async (req,res)=>{
  const id=req.params.id;
  const respuesta= await AutorModel.findById(id).exec();
  res.send(respuesta);
});

router.get('/',(req,res)=>{
  res.send('Hola soy un metodo get');
});

//app.listen es el metodo que se utiliza para crear el servidor, 
//recibe como parametro el puerto en el que se va a correr el servidor 
//y una funcion que se ejecuta cuando el servidor esta corriendo
app.use(express.json());
app.use(router);
app.listen(3000, () => {
  console.log('El servidor esta corriendo en el puerto 3000');
});

//se ejecuta la funcion que se encuentra en el archivo config.js



