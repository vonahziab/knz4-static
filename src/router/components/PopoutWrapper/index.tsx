import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect, useState } from 'react';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	router: IRouter;
}

const PopoutWrapper = ({ children, router }: Props) => {
	const [enableBackgroudClose, setEnableBackgroudClose] = useState(false);
	const { bottom } = useSafeInsets();

	useEffect(() => {
		setTimeout(() => {
			setEnableBackgroudClose(true);
		}, 400 + 200); // Пока проявится фон и отобразится попаут
	}, [router.data.popout]);

	const _closeListener = (e?: Event) => {
		e && e.preventDefault();
		setEnableBackgroudClose(false);
		router.setPopout();
	};

	useEffect(() => {
		const PopoutWrapper = document.getElementById('PopoutWrapper');
		const PopoutContent = document.getElementById('PopoutContent');
		if (PopoutWrapper && PopoutContent) {
			setTimeout(() => {
				PopoutWrapper.style.backgroundColor = 'rgba(0, 0, 0, .7)';

				setTimeout(() => {
					PopoutContent.style.opacity = `1`;
					PopoutContent.style.transform = 'scale(1)';
				}, 400); // После полного затемнения выполнить
			}, 0);
		}
	}, []);

	return (
		<div
			id="PopoutWrapper"
			className="PopoutWrapper"
			onClick={() => (enableBackgroudClose ? _closeListener() : () => {})}
		>
			<div
				id="PopoutContent"
				className="PopoutContent"
				style={{
					paddingBottom: bottom,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default PopoutWrapper;
