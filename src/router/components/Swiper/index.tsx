import getWebApp from 'functions/getWebApp';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IRouter } from 'router/types';
import './index.css';
interface Props {
	router: IRouter;
	onSwipeBack?: Function;
	onSwipeBackEnd?: Function;
	disabled?: boolean;
}

const Swiper = ({
	router,
	disabled,
	onSwipeBack = () => getWebApp()?.HapticFeedback.impactOccurred('light'),
	onSwipeBackEnd,
}: Props) => {
	const [showIconBack, setShowIconBack] = useState(false);

	const CIRCLE_HEIGHT = 120;
	const CIRCLE_WIDTH = 120;
	const CIRCLE_SWIPE_LENGTH = CIRCLE_WIDTH / 3;

	const [y, setY] = useState(0);
	const [x, setX] = useState(0);
	const [dX, setDX] = useState(-100);
	const [enabledSwipeBack, setEnabledSwipeBack] = useState(true);

	useEffect(() => {
		if (disabled) return;

		const C = document.getElementById('ARMUI_Swiper_circle') as HTMLElement;
		C.style.left = `${dX - CIRCLE_WIDTH}px`;
		C.style.top = `${y - CIRCLE_HEIGHT / 2}px`;
	}, [dX, y, disabled]);

	useEffect(() => {
		if (disabled) return;
		if (router.data.modal_id) return;

		const TW = document.getElementById('app') as HTMLElement;
		const C = document.getElementById('ARMUI_Swiper_circle') as HTMLElement;

		const ts = (e: TouchEvent | MouseEvent) => {
			const _X = (e as any).touches?.[0]?.clientX?.toFixed(0) || (e as any)?.x?.toFixed(0);
			const _Y = (e as any).touches?.[0]?.clientY?.toFixed(0) || (e as any)?.y?.toFixed(0);
			setX(+_X);
			setY(+_Y);
			C.style.transform = `scale(1)`;
			C.style.transition = 'none';
		};

		const tm = (e: TouchEvent | MouseEvent) => {
			const _X = (e as any).touches?.[0]?.clientX?.toFixed(0) || (e as any)?.x?.toFixed(0);
			const _Y = (e as any).touches?.[0]?.clientY?.toFixed(0) || (e as any)?.y?.toFixed(0);

			if (x > window.innerWidth * 0.1) return;
			if (dX > CIRCLE_SWIPE_LENGTH && _X - x > dX) return;
			// console.log(_X);

			if (
				dX === CIRCLE_SWIPE_LENGTH &&
				_X - x >= CIRCLE_SWIPE_LENGTH &&
				enabledSwipeBack &&
				onSwipeBack
			) {
				onSwipeBack();
				setShowIconBack(true);
				setEnabledSwipeBack(false);
			} else if (_X - x < CIRCLE_SWIPE_LENGTH) {
				setShowIconBack(false);
				setEnabledSwipeBack(true);
			}

			setDX(_X - x > CIRCLE_SWIPE_LENGTH ? CIRCLE_SWIPE_LENGTH : _X - x);

			setY(+_Y);

			e.preventDefault();
			e.stopPropagation();
			C.style.transition = 'none';
		};

		const te = (e: TouchEvent | MouseEvent) => {
			if (dX === CIRCLE_SWIPE_LENGTH && onSwipeBackEnd) {
				onSwipeBackEnd();
			}

			setDX(0);
			setX(0);
			setEnabledSwipeBack(true);
			setShowIconBack(false);
			C.style.transition = 'var(--default_transition)';
			C.style.transform = `scale(0)`;
		};

		TW && TW.addEventListener('touchstart', ts);
		TW && TW.addEventListener('touchmove', tm);
		TW && TW.addEventListener('touchend', te);
		return () => {
			TW.removeEventListener('touchstart', ts);
			TW.removeEventListener('touchmove', tm);
			TW.removeEventListener('touchend', te);
		};
	}, [x, y, dX, enabledSwipeBack, disabled, router.data.modal_id]);

	return disabled ? (
		<></>
	) : (
		<div
			id="ARMUI_Swiper_circle"
			style={{
				left: CIRCLE_WIDTH * -1,
				height: CIRCLE_HEIGHT,
				width: CIRCLE_WIDTH,
				display: 'flex',
				justifyContent: 'end',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: CIRCLE_WIDTH / 3 + 6,
					height: CIRCLE_WIDTH / 3,
					color: 'black',
					overflow: 'hidden',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					// backgroundColor: 'red',
					// opacity: 0.3,
				}}
			>
				{showIconBack && (
					<IoIosArrowBack
						size={(CIRCLE_WIDTH / 3) * 0.9}
						color={'var(--primary_color)'}
						style={{
							opacity: 0.8,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Swiper;
