import axios from 'axios';
import config from 'config';

export const headers = {
	headers: {
		'Content-Type': 'application/json',
		Authorization: '', // ! getWebApp()?.initData || ''
	},
};

export const handle_server = <T>(method: string, body?: any): Promise<T> =>
	new Promise((resolve, reject) => {
		axios
			.post(`${config.server.domain}/${method}`, body, headers)
			.then((res: any) => {
				resolve(res.data);
			})
			.catch((e: any) => {
				const code = +e.toJSON().status;
				if (code === 429) {
					reject({
						e: 429,
						message:
							'Вы слишком часто повторяете однотипные дествия, попробуйте позже!',
					} as IServerError);
				} else {
					reject({
						message: e.response?.data
							? `${e.response.data?.error}`
							: `Не удалось подключиться к серверу`,
					} as IServerError);
				}
			});
	});

export interface IServerError {
	e?: number;
	message: string;
}
