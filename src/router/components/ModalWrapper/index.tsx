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
			router.data.modal_id && setEnableBackgroudClose(true);
		}, 400 + 200); // Пока проявится фон и поднимется модалка
	}, [router.data.modal_id]);

	const setSwipeEnabled = useSetRecoilState(app_modal_swipe_enabled);

	const _closeListener = (e?: Event) => {
		e && e.preventDefault();
		setEnableBackgroudClose(false);
		router.closeModal();
	};

	useEffect(() => {
		window.addEventListener('backbutton', _closeListener);
		return () => {
			window.removeEventListener('backbutton', _closeListener);
		};
	}, []);

	useEffect(() => {
		const ModalWrapper = document.getElementById('ModalWrapper');
		const Modal =
			router.data.modal_id && document.getElementById(`${router.data.modal_id}_Modal`);

		if (ModalWrapper && Modal) {
			setTimeout(() => {
				ModalWrapper.style.backgroundColor = 'rgba(0, 0, 0, .7)';

				setTimeout(() => {
					Modal.style.transform = `translateY(0)`;
					setSwipeEnabled(true);
				}, 400); // После полного затемнения выполнить
			}, 0);
		}

		return () => setSwipeEnabled(false);
	}, []);

	return (
		<div
			id="ModalWrapper"
			className="ModalWrapper"
			onClick={() => (enableBackgroudClose ? _closeListener() : undefined)}
		>
			{children}
		</div>
	);
};

export default ModalWrapper;
