import { HTMLAttributes, useEffect, useState } from 'react';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	router: IRouter;
}

const PopoutWrapper = ({ children, router }: Props) => {
	const [enableBackgroudClose, setEnableBackgroudClose] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setEnableBackgroudClose(true);
		}, 400 + 200); // Пока проявится фон и отобразится попаут
	}, [router.data.popout]);

	const _closeListener = (e?: Event) => {
		e && e.preventDefault();
		router.setPopout();
	};

	useEffect(() => {
		const PopoutWrapper = document.getElementById('PopoutWrapper');
		const PopoutWrapper_Content = document.getElementById('PopoutWrapper_Content');
		if (PopoutWrapper && PopoutWrapper_Content) {
			setTimeout(() => {
				PopoutWrapper.style.backgroundColor = 'rgba(0, 0, 0, .7)';

				setTimeout(() => {
					PopoutWrapper_Content.style.opacity = `1`;
					PopoutWrapper_Content.style.transform = 'scale(1)';
				}, 400); // После полного затемнения выполнить
			}, 0);
		}
	}, []);

	return (
		<div
			id="PopoutWrapper"
			onClick={() => (enableBackgroudClose ? _closeListener() : () => {})}
		>
			<div id="PopoutWrapper_Content">{children}</div>
		</div>
	);
};

export default PopoutWrapper;
