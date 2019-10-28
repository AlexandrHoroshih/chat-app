const express = require('express');
const socket = require('socket.io');

const app = express();

const port = 3000;

app.use('/', express.static('../build'));

const server = app.listen(port, function() {
  console.log('Running on port: ' + port);
});

const sock = socket(server);

sock.on('connection', function(socket) {
  console.log('made connection with socket ' + socket.id);
});
