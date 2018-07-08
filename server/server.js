const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app)
var io = socketIO(server);

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'tanmay',
		text: 'haw ya doin',
		createdAt: 123
	});

	socket.on('createMessage', (newMessage) => {
		console.log('new Message', newMessage)
	});

	socket.on('disconnect', () => {
		console.log('Connection lost');
	});
});

app.use(express.static(publicPath));

server.listen(3000, () => {
	console.log(`server starting at ${port}`);
});