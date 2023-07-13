import { datos } from './datos.js';

function conectarse() {
  console.log('buscando mi base de datos imaginaria');
  console.log('estamos conectados a la base de datos');
}

// consultas
function buscarTodosLosUsuarios() {
  console.log('consultando los usuarios...');
  return datos.usuarios;
}

const buscarProductos = () => {
  console.log('consultando los productos');
  return datos.produtos;
};

export const db = {
  conectarse,
  buscarTodosLosUsuarios,
  buscarProductos,
};
