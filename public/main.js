$(function () {
    console.log('Cargado!');

    var message = $('#chat-message');

    var chat = $('#chat');

    $('#message-box').submit(function(e) {
        e.preventDefault();
        chat.append(message.val() + '<br>');
    });
});