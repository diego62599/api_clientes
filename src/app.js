const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

app.use(bodyParser.json());

// Conectar las rutas
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', clienteRoutes);

module.exports = app;
