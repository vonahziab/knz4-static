import useHaptic from 'hooks/useHaptic';
import { HTMLAttributes, useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { AppModal } from 'router/routes';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppModal;
	router: IRouter;
	header?: string;
}

const Modal = ({ id, children, style, router, header }: Props) => {
	const haptic = useHaptic();

	const [y, setY] = useState(0);
	const [dY, setDY] = useState(0);
	const [enabledSwipeBack, setEnabledSwipeBack] = useState(true);

	const _closeListener = (e?: Event) => {
		if (e && e.cancelable) e.preventDefault();
		router.closeModal();
	};

	useEffect(() => {
		const Popout_Window = router.data.modal_id && document.getElementById(id);
		if (Popout_Window && router.data.modal_swipe_enabled) {
			Popout_Window.style.transform = `translateY(${dY}px)`;
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
				ModalSwipeHandler.style.backgroundColor = 'var(--bg_color_3)';
				if (enabledSwipeBack) {
					haptic.impact.rigid();
				}
				setEnabledSwipeBack(false);
			} else {
				ModalSwipeHandler.style.backgroundColor = 'var(--bg_color_4)';
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
				ModalSwipeHandler.style.backgroundColor = 'var(--bg_color_6)';
			}
		};

		ModalSwipe && ModalSwipe.addEventListener('touchstart', ts);
		ModalSwipe && ModalSwipe.addEventListener('touchmove', tm);
		ModalSwipe && ModalSwipe.addEventListener('touchend', te);
		return () => {
			ModalSwipe.removeEventListener('touchstart', ts);
			ModalSwipe.removeEventListener('touchmove', tm);
			ModalSwipe.removeEventListener('touchend', te);
		};
	}, [y, dY, enabledSwipeBack]);

	const ots = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		target.style.color = 'var(--bg_color_3)';
	};

	const ote = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.color = 'var(--bg_color_6)';
		}, 150);
	};

	const oc = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.currentTarget;
		target.style.color = 'var(--bg_color_3)';

		setTimeout(() => {
			target.style.color = 'var(--bg_color_6)';
		}, 150);

		setTimeout(() => {
			e.stopPropagation();
			e.preventDefault();
			_closeListener();
		}, 200);
	};

	return (
		<div
			id={id}
			style={{
				// paddingBottom: 20,
				maxHeight: '100%',
				width: '100%',
				backgroundColor: 'var(--bg_color)',
				display: 'block',
				boxSizing: 'border-box',
				borderRadius: 16,
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				overflowY: 'scroll',
				transition: 'var(--default_transition)',
				transform: 'translateY(100%)',
				...style,
			}}
			onClick={e => e.stopPropagation()}
		>
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
							backgroundColor: 'var(--bg_color_6)',
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
						<div style={{ height: 30, minWidth: 30 }} />
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
							onTouchStart={e => ots(e)}
							onTouchEnd={e => ote(e)}
							onClick={e => oc(e)}
							style={{
								height: 30,
								width: 30,
								color: 'var(--bg_color_6)',
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
							backgroundColor: 'var(--bg_color_3)',
							color: 'var(--bg_color_3)',
							...style,
						}}
					/>
				)}
			</div>

			{children}
		</div>
	);
};

export default Modal;
