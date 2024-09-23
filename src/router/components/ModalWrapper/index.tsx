import { HTMLAttributes, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { app_modal_swipe_enabled } from 'router/state';
import { IRouter } from 'router/types';

interface Props extends HTMLAttributes<HTMLElement> {
	router: IRouter;
}

const ModalWrapper = ({ children, router }: Props) => {
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
			style={{
				position: 'fixed',
				bottom: 0,
				right: 0,
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0, 0, 0, .8)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'end',
				zIndex: 1001,
				transition: 'all 0.2s ease',
			}}
			onClick={() => _closeListener()}
		>
			{children}
		</div>
	);
};

export default ModalWrapper;
