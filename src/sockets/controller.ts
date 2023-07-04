import { Socket } from 'socket.io';

export const socketController = (socket: Socket) => {
	console.log('Client connected', socket.id);

	socket.on('disconnect', () => {
		console.log('Client disconnected', socket.id);
	});

	socket.on('send-message', (payload, cb) => {
		const id = 123456;
		cb({ id, date: new Date().getTime() });
		socket.broadcast.emit('send-message', payload);
	});
};
