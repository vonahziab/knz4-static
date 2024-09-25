import { handle_server } from 'server/handle';

const user = {
	get: () => {
		handle_server<{
			data: {};
		}>('user/get');
	},
};

export default user;
