import { Socket } from 'socket.io-client';

const user = (socket: Socket) => {
	return {
		get: () => {
			socket.emit('user_get');
		},
	};
};

export default user;
