const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
//Definir el servidor para correr nuestra aplicacion
//Hay que hacerlo de esta manera porwue socket.io no trabaja directamente con express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

//Inicializar lo que es el socket.io
module.exports.io = socketIO(server);
//IO = esta es la comunicacion del backend
//io va a mantener una conexion directa con el servidor
require("./sockets/socket");

//En vez de app.listen va server.listen
server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);
});