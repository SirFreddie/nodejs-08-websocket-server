// HTML references
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

// Socket client
const socket = io();

socket.on('connect', () => {
	console.log('Connected to server');
	lblOffline.style.display = 'none';
	lblOnline.style.display = '';
});

socket.on('disconnect', () => {
	console.log('Disconnected from server');
	lblOffline.style.display = '';
	lblOnline.style.display = 'none';
});

socket.on('send-message', payload => {
	console.log('Server says: ', payload);
});

btnSend.addEventListener('click', () => {
	const message = txtMessage.value;
	const payload = {
		message,
		id: '123ABC',
		date: new Date().getTime(),
	};

	socket.emit('send-message', payload, id => {
		console.log('From server', id);
	});
});
