import config from 'config';
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const useSockets = ({ socket }: { socket: Socket }) => {
	useEffect(() => {
		const socket = io(`${config.server.ws}`, {
			autoConnect: false,
			transports: ['websocket'],
			auth: { token: '' }, // !
		});

		socket.connect();
		return () => {
			socket.close();
		};
	}, []); // ! token

	// useEffect(() => {
	// 	socket.on('connect', () => {
	// 		setIsConnected(true);
	// 		setPopout(undefined);
	// 	});

	// 	socket.on('disconnect', () => {
	// 		socket.active &&
	// 			setPopout(<Popout style={{ textAlign: 'center' }}>Переподключение</Popout>);
	// 		setIsConnected(false);
	// 	});

	// 	socket.on('connect_error', (err: Error) => {
	// 		setIsConnected(false);

	// 		const res = err as IConnectionErrorRes;
	// 		const errText = res?.message || 'Ошибка';
	// 		const errData = res?.data;
	// 		const errCode = errData?.error_code;

	// 		if (errCode === 100001) {
	// 			setPopout(<TokenExpired text={errText} data={errData} />);
	// 			cookies.setCookie('pixigo_token', 'deleted', {
	// 				path: '/',
	// 				domain: config.vars.app_url,
	// 				samesite: 'strict',
	// 				expires: new Date(Date.now() + 1).toUTCString(),
	// 			});
	// 		}
	// 	});

	// 	socket.on('already', (res: IAlreadyRes) => {
	// 		socket.close();
	// 		setIsConnected(false);
	// 		setPopout(<SocketAlready socket={socket} data={res} />);
	// 	});

	// 	socket.on('online_count', (res: IOnlineCountRes) => {
	// 		setOnlineCount(+res?.users || 1);
	// 	});
	// }, []);
};

export default useSockets;
