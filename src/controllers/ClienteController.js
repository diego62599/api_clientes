const Cliente = require('../models/Cliente');

// Obtener todos los libros
async function getAllClientes(req, res) {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los cliente}.' });
  }
}

// Obtener un libro por ID
async function getClienteById(req, res) {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findById(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado.' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cliente.' });
  }
}

// Crear un nuevo libro
async function createCliente(req, res) {
  const { nombreApellido, cedula, correo,direccion,telefono, estado } = req.body;
  try {
    const cliente = new Cliente({ nombreApellido, cedula, correo,direccion,telefono, estado });
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el cliente.' });
  }
}

// Actualizar un libro por ID
async function updateCliente(req, res) {
  const { id } = req.params;
  const { nombreApellido, cedula, correo,direccion,telefono, estado } = req.body;
  try {
    const cliente = await Cliente.findByIdAndUpdate(id, { nombreApellido, cedula, correo,direccion,telefono, estado }, { new: true });
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado.' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el Cliente.' });
  }
}

// Eliminar un libro por ID
async function deleteCliente(req, res) {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByIdAndDelete(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente.' });
  }
}

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
