const express = require('express');
const app = express();

app.get('/', function(rea, res) {
    res.end('Mi chat iniciado');
});

app.listen(3000, function() {
    console.log('Servidor iniciado');
});