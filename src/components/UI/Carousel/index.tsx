import Bullets from 'components/UI/Bullets';
import React, { Children, HTMLAttributes, cloneElement, useEffect, useId, useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	slideWidthPercent?: number;
	bullets?: boolean;
	arrows?: boolean;
	activeId: number;
	setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({
	className,
	children,
	style,
	slideWidthPercent = 100,
	activeId,
	setActiveId,
	bullets,
	arrows,
}: Props) => {
	const uniqueElementId = 'Carousel' + useId();

	const [width, setWidth] = useState(window.innerWidth);
	const [slides, setSlides] = useState<
		React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
	>([]);
	const [slideWidthPx, setSlideWidthPx] = useState(0);
	const [slideOffsetX, setSlideOffsetX] = useState(0);

	const [x, setX] = useState(0);
	const [swipeX, setSwipeX] = useState(0);
	const [timeSwipeMs, setTimeSwipeMs] = useState(0);

	// * Функции-хелперы
	const nextSlide = () =>
		setActiveId(i => {
			return activeId !== slides.length ? i + 1 : i;
		});
	const prevSlide = () =>
		setActiveId(i => {
			return activeId !== 1 ? i - 1 : i;
		});

	// * Установка начального значения смещения с лимитом
	useEffect(() => {
		const a = (slides.length - 2) * slideWidthPx;
		const b = slideWidthPx - (width - slideWidthPx);
		const maxOffset = (a + b + (slides.length + 1) * 16) * -1;
		const newValue = -1 * (activeId - 1) * slideWidthPx;

		setSlideOffsetX(slides.length === 1 ? 0 : newValue < maxOffset ? maxOffset : newValue);
	}, [activeId, slideWidthPx]);

	// * Ширина страницы
	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// * Ширина слайда
	useEffect(() => {
		setSlideWidthPx((slideWidthPercent * width) / 100);
	}, [slideWidthPercent, width]);

	// * Слайды
	useEffect(() => {
		const array = Children.toArray(children);
		const nodes = array.filter(item => React.isValidElement(item)) as React.ReactElement[];
		const childrenMod = Children.map(nodes, child => {
			return cloneElement(child, {
				style: {
					height: '100%',
					width: '100%',
					...child.props.style,
				},
			});
		});

		setSlides(childrenMod);
	}, [children]);

	// * Стиль слоя
	const carouselLayerStyle = (offsetX: number) => {
		return {
			WebkitTransform: `translateX(${offsetX}px)`,
			transform: `translateX(${offsetX}px)`,
			WebkitTransition: `transform 0.2s cubic-bezier(.1, 0, .25, 1)`,
			transition: `transform 0.2s cubic-bezier(.1, 0, .25, 1)`,
		};
	};

	// * Контроллируемое поведение
	useEffect(() => {
		const TW = document.getElementById(uniqueElementId) as HTMLElement;

		const ts = (e: TouchEvent | MouseEvent) => {
			const _X = (e as any).touches?.[0]?.clientX?.toFixed(0) || (e as any)?.x?.toFixed(0);
			setX(+_X);
			setTimeSwipeMs(new Date().getTime());
		};

		const tm = (e: TouchEvent | MouseEvent) => {
			const _X = (e as any).touches?.[0]?.clientX?.toFixed(0) || (e as any)?.x?.toFixed(0);

			if (activeId === 1 && _X - x > 0) return;
			if (activeId === slides.length && _X - x < 0) return;

			setSwipeX(_X - x);

			// e.preventDefault();
			// e.stopPropagation();
		};

		const te = (e: TouchEvent | MouseEvent) => {
			// e.preventDefault();
			// e.stopPropagation();

			setSwipeX(0);
			setX(0);
			setTimeSwipeMs(0);

			const timeSwipe = new Date().getTime() - timeSwipeMs;

			const sense = timeSwipe > 250 ? slideWidthPx * 0.2 : 10;
			const AbsSwipeX = Math.abs(swipeX);

			if (swipeX > 0) {
				if (AbsSwipeX > sense) {
					console.log('назад', AbsSwipeX > sense);
					prevSlide();
				}
			} else {
				if (AbsSwipeX > sense) {
					console.log('вперед', AbsSwipeX > sense);
					nextSlide();
				}
			}
		};

		TW && TW.addEventListener('touchstart', ts);
		TW && TW.addEventListener('touchmove', tm);
		TW && TW.addEventListener('touchend', te);
		return () => {
			TW.removeEventListener('touchstart', ts);
			TW.removeEventListener('touchmove', tm);
			TW.removeEventListener('touchend', te);
		};
	}, [x, activeId, swipeX]);

	return (
		<div
			id={uniqueElementId}
			className={`Carousel ${className}`}
			style={{
				...style,
			}}
		>
			{bullets && (
				<div className="CarouselBullets">
					<Bullets
						countBullets={slides.length}
						activeBulletId={activeId}
						setActiveBulletId={setActiveId}
					/>
				</div>
			)}

			{arrows && (
				<div className="CarouselArrowsWrapper">
					<div className="CarouselArrows">
						<div
							className="CarouselArrow"
							style={{
								backgroundColor: activeId !== 1 ? 'var(--accent_color)' : undefined,
								border:
									activeId !== 1 ? '.5px solid var(--accent_color)' : undefined,
							}}
						>
							{activeId !== 1 && (
								<FaCircleArrowLeft
									size={32}
									color="var(--bg_color)"
									onClick={() => prevSlide()}
								/>
							)}
						</div>
						<div
							className="CarouselArrow"
							style={{
								backgroundColor:
									activeId !== slides.length ? 'var(--accent_color)' : undefined,
								border:
									activeId !== slides.length
										? '.5px solid var(--accent_color)'
										: undefined,
							}}
						>
							{activeId !== slides.length && (
								<FaCircleArrowRight
									size={32}
									color="var(--bg_color)"
									onClick={() => nextSlide()}
								/>
							)}
						</div>
					</div>
				</div>
			)}

			<div
				id="CarouselLayer"
				className="CarouselLayer"
				style={{
					...carouselLayerStyle(slideOffsetX + swipeX),
				}}
			>
				{slides.map((child, index) => (
					<div
						id={`CarouselItem${index + 1}`}
						key={index}
						className="CarouselItem"
						style={{
							width: `${slideWidthPercent}%`,
							minWidth: `${slideWidthPercent}%`,
							maxWidth: `${slideWidthPercent}%`,
						}}
					>
						{child}
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
