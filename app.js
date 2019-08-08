const http = require('http');
const express = require('express');
const app = express();
const io = require('socket.io');

const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

server.listen(app.get('port'), function() {
    console.log('Servidor iniciado');
});

var sockets = io.listen(server);

sockets.on('connection', function (socket) {
    console.log('Nuevo cliente conectado');

    socket.on('mensaje-del-cliente', function(datos) {
        console.log(datos);
        sockets.emit('mensaje-del-servidor', datos);
    });
})