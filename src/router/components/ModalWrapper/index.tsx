import { HTMLAttributes, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { app_modal_swipe_enabled } from 'router/state';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	router: IRouter;
}

const ModalWrapper = ({ children, router }: Props) => {
	const [enableBackgroudClose, setEnableBackgroudClose] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setEnableBackgroudClose(true);
		}, 400);
	}, [router.data.modal_id]);

	const setSwipeEnabled = useSetRecoilState(app_modal_swipe_enabled);

	const _closeListener = (e?: Event) => {
		e && e.preventDefault();
		router.closeModal();
	};

	useEffect(() => {
		window.addEventListener('backbutton', _closeListener);
		return () => {
			window.removeEventListener('backbutton', _closeListener);
		};
	}, []);

	useEffect(() => {
		const Popout_Window = router.data.modal_id && document.getElementById(router.data.modal_id);
		if (Popout_Window) {
			setTimeout(() => {
				Popout_Window.style.transform = `translateY(0)`;
				setSwipeEnabled(true);
			}, 150);
		}

		return () => setSwipeEnabled(false);
	}, []);

	return (
		<div
			id="ModalWrapper"
			onClick={() => (enableBackgroudClose ? _closeListener() : undefined)}
		>
			{children}
		</div>
	);
};

export default ModalWrapper;
