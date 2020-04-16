const { io } = require("../server");

//Para saber cuando un usuario se conecta al servidor
io.on("connection", (client) => {
    console.log("Usuario conectado");

    //ENVIAR INFO AL CLIENTE
    client.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a la aplicacion",
    });

    client.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    //ESCUCHAR AL CLIENTE
    //Aqui especifico el enviarMensaje que puse en el index para poder escucharlo
    //Si no implemento nada la informacion se esta mandando pero simplemente el servidor no la escucha
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);

        /*if (mensaje.usuario) {
                    callback({
                        respuesta: "TODO SALIO BIEN!",
                    });
                } else {
                    callback({
                        respuesta: "TODO SALIO MAL!!!!!!",
                    });
                }*/

        client.broadcast.emit("enviarMensaje", data);
    });
});
//El objeto client contiene toda la informacion de la computadora o de la conexion que se establecio