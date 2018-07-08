var socket = io();

	socket.on('connect', function() {
		console.log('connected to server');

		socket.emit('createMessage', {
			from: 'nikita',
			text: 'I watched all the football matches yesterday.'
		});
    });

	socket.on('disconnect', function() {
		console.log('Disconnected from server');
	});

	socket.on('newMessage', function (message){
		console.log('new Message recieved:', message);
	});