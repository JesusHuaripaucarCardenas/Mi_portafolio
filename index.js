const http = require('http'); // Corregido el error tipográfico
const express = require('express');
const path = require('path'); // Se añadió para manejar rutas de archivos
const app = express();

const PORT = 4000; // Definimos el puerto

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname + '/'));  

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Usar sendFile para servir un archivo estático
});

// Iniciar servidor en el puerto 4000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
