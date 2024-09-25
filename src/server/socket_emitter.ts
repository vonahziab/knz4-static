import { Socket } from 'socket.io-client';
import user from './sockets/user';

const socket_emitter = (socket: Socket) => {
	return {
		init: () => socket.emit('init'),
		user: user(socket),
	};
};

export default socket_emitter;
