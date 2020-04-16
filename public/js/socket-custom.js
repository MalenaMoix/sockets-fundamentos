//Funciones que queremos que se disparen cuando recibamos informacion del servidor o cuando nosotros queramos enviar informacion al servidor

var socket = io();

//Los on son para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
});

//Los emit son para enviar informacion
//En este caso solo le estoy enviando informacion al servidor, es un 1 a 1
socket.emit(
    "enviarMensaje", {
        usuario: "Malena",
        mensaje: "Hola Mundo",
    },
    function(respuesta) {
        console.log("Respuesta del servidor:", respuesta);
    }
);

//Escuchar info
socket.on("enviarMensaje", function(informacion) {
    console.log("Mensaje del servidor: ", informacion);
});