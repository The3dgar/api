// servidor
import express from 'express';
import { db } from './db.js';
const server = express();

// conexion a una base de datos
db.conectarse();

// rutas - servicios - endpoints

server.get('/', function (request, response) {
  response.send('hola');
});

server.get('/fecha', function (request, response) {
  response.send(Date());
});

server.get('/usuarios', (req, res) => {
  const usuarios = db.buscarTodosLosUsuarios();
  res.send(usuarios);
});

server.get('/productos', (req, res) => {
  const productos = db.buscarProductos()
  res.send(productos)
})

const puerto = 3000
server.listen(puerto, () => {
  console.log('conectados en el puerto:', puerto);
});
