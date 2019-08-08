module.exports = function(server) {
    var sockets = io.listen(server);

    sockets.on('connection', function (socket) {
        console.log('Nuevo cliente conectado');

        socket.on('mensaje-del-cliente', function(datos) {
            console.log(datos);
            sockets.emit('mensaje-del-servidor', datos);
        });
    });
}