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

io.listen(server);