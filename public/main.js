$(function () {

    // Socket iniciado
    var socket = io();

    console.log('Cargado!');

    var message = $('#chat-message');

    var chat = $('#chat');

    $('#message-box').submit(function(e) {
        e.preventDefault();
        // chat.append(message.val() + '<br>');
        socket.emit('mensaje-del-cliente', message.val());

        message.val('');
    });
    
    socket.on('mensaje-del-servidor', function(datos) {
        console.log(datos);
        chat.append(datos + '<br>');
    })
});