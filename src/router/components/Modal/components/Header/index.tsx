import useHaptic from 'hooks/useHaptic';
import usePlatform from 'hooks/usePlatform';
import { HTMLAttributes, useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { IoCloseCircle } from 'react-icons/io5';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: string;
	router: IRouter;
	header?: string;
}

const Header = ({ id, router, header }: Props) => {
	const haptic = useHaptic();
	const { platform } = usePlatform();

	const [y, setY] = useState(0);
	const [dY, setDY] = useState(0);
	const [enabledSwipeBack, setEnabledSwipeBack] = useState(true);

	const _closeListener = (e?: Event) => {
		if (e && e.cancelable) e.preventDefault();
		router.closeModal();
	};

	useEffect(() => {
		const Modal = router.data.modal_id && document.getElementById(`${id}_Modal`);
		if (Modal && router.data.modal_swipe_enabled) {
			setTimeout(() => {
				Modal.style.transform = `translateY(${dY}px)`;
			}, 0);
		}
	}, [dY]);

	useEffect(() => {
		const ModalSwipe = document.getElementById('ModalSwipe') as HTMLElement;
		const ModalSwipeHandler = document.getElementById('ModalSwipeHandler') as HTMLElement;

		const ts = (e: TouchEvent | MouseEvent) => {
			const Y = (e as any).touches?.[0]?.clientY?.toFixed(0) || (e as any)?.y?.toFixed(0);
			setY(+Y);
		};

		const tm = (e: TouchEvent | MouseEvent) => {
			const Y = (e as any).touches?.[0]?.clientY?.toFixed(0) || (e as any)?.y?.toFixed(0);
			const DeltaY = Y - y > 50 ? 50 : Y - y < 0 ? 0 : Y - y;

			if (DeltaY >= 0) {
				if (DeltaY <= 50) {
					setDY(DeltaY);
				}
			}

			if (DeltaY === 50) {
				if (ModalSwipeHandler) {
					ModalSwipeHandler.style.backgroundColor = 'var(--modal_swipe_handler_action)';
				}
				if (enabledSwipeBack) {
					haptic.impact.rigid();
				}
				setEnabledSwipeBack(false);
			} else {
				if (ModalSwipeHandler) {
					ModalSwipeHandler.style.backgroundColor = 'var(--modal_swipe_handler_drag)';
				}
				setEnabledSwipeBack(true);
			}

			if (e.cancelable) e.preventDefault();
			e.stopPropagation();
		};

		const te = (e: TouchEvent | MouseEvent) => {
			if (dY === 50) {
				return _closeListener(e);
			}

			setDY(0);

			if (ModalSwipeHandler) {
				ModalSwipeHandler.style.backgroundColor = 'var(--modal_swipe_handler)';
			}
		};

		ModalSwipe && ModalSwipe.addEventListener('touchstart', ts);
		ModalSwipe && ModalSwipe.addEventListener('touchmove', tm);
		ModalSwipe && ModalSwipe.addEventListener('touchend', te);
		return () => {
			ModalSwipe && ModalSwipe.removeEventListener('touchstart', ts);
			ModalSwipe && ModalSwipe.removeEventListener('touchmove', tm);
			ModalSwipe && ModalSwipe.removeEventListener('touchend', te);
		};
	}, [y, dY, enabledSwipeBack]);

	const otsBack = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		target.style.color = 'var(--modal_back_button_click)';
	};

	const oteBack = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.color = 'var(--modal_back_button)';
		}, 50);
	};

	const ocBack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		e.preventDefault();

		const target = e.currentTarget;
		target.style.color = 'var(--modal_back_button_click)';

		setTimeout(() => {
			target.style.color = 'var(--modal_back_button)';
		}, 50);

		setTimeout(() => {
			router.goBack();
		}, 100);
	};

	const otsClose = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		target.style.color = 'var(--modal_exit_button_click)';
	};

	const oteClose = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.color = 'var(--modal_exit_button)';
		}, 50);
	};

	const ocClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		e.preventDefault();

		const target = e.currentTarget;
		target.style.color = 'var(--modal_exit_button_click)';

		setTimeout(() => {
			target.style.color = 'var(--modal_exit_button)';
		}, 50);

		setTimeout(() => {
			_closeListener();
		}, 100);
	};

	return (
		<div
			id="ModalSwipe"
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'column',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					padding: '8px 0 4px 0',
					boxSizing: 'border-box',
				}}
			>
				<div
					id="ModalSwipeHandler"
					style={{
						height: 5,
						width: 36,
						backgroundColor: 'var(--modal_swipe_handler)',
						borderRadius: 2.5,
					}}
				/>
			</div>

			{header && (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '0 16px 8px 16px',
						boxSizing: 'border-box',
					}}
				>
					{router.data.modalHistory.length > 1 && platform !== 'tg' ? (
						<div
							className="Modal_BackBtn"
							onTouchStart={e => otsBack(e)}
							onTouchEnd={e => oteBack(e)}
							onClick={e => ocBack(e)}
							style={{
								height: 30,
								width: 30,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								color: 'var(--modal_back_button)',
							}}
						>
							<FaAngleLeft size={28} />
						</div>
					) : (
						<div style={{ height: 30, minWidth: 30 }} />
					)}
					<div
						style={{
							lineHeight: '22px',
							fontSize: '17px',
							fontWeight: '500',
							textAlign: 'center',
						}}
					>
						{header}
					</div>
					<div
						className="Modal_CloseBtn"
						onTouchStart={e => otsClose(e)}
						onTouchEnd={e => oteClose(e)}
						onClick={e => ocClose(e)}
						style={{
							height: 30,
							width: 30,
							color: 'var(--modal_exit_button)',
						}}
					>
						<IoCloseCircle size={30} />
					</div>
				</div>
			)}
			{header && (
				<hr
					style={{
						height: 1,
						width: '100%',
						border: 'none',
						backgroundColor: 'var(--border_color)',
						color: 'var(--border_color)',
					}}
				/>
			)}
		</div>
	);
};

export default Header;
