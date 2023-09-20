const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombreApellido: {
    type: String,
    required: true,
  },
  cedula: {
    type: Number,
    required: [true, 'El campo cedula es requerido'],
    unique: true
  },
  correo: {
    type: String,
    required: [true, 'El campo correo es requerido'],
    unique: true
  },
  direccion: {
    type: String,
    required: [true, 'El campo direccion es requerido']
  },
  telefono: {
    type: String,
    required: [true, 'El campo telefono es requerido']
  },
  estado: {
    type: String,
    default: 'Activo',
    required: true,
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
