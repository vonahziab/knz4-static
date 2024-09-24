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
		}, 400);
	}, [router.data.popout]);

	const _closeListener = (e?: Event) => {
		e && e.preventDefault();
		router.setPopout();
	};

	useEffect(() => {
		const PopoutWrapper_Content = document.getElementById('PopoutWrapper_Content');
		if (PopoutWrapper_Content) {
			setTimeout(() => {
				PopoutWrapper_Content.style.opacity = `1`;
				PopoutWrapper_Content.style.transform = 'scale(1)';
			}, 10);
		}
	}, []);

	return (
		<div
			id="PopoutWrapper"
			onClick={() => (enableBackgroudClose ? _closeListener() : () => {})}
		>
			<div
				id="PopoutWrapper_Content"
				style={{
					opacity: 0,
					transition: 'var(--popout_transition)',
					transform: 'scale(0.8)',
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default PopoutWrapper;
