import useSafeInsets from 'hooks/useSafeInsets';
import { useEffect, useState } from 'react';
import { Panel } from 'router';
import { PanelProps } from 'router/types';
import './index.css';

const Loader = ({ id, router }: PanelProps) => {
	const { bottom } = useSafeInsets();
	const [showTextLoading, setShowTextLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowTextLoading(true), 2550);

		const Logo_Wrappper = document.getElementById('Logo_Wrappper');
		const Loader_Element1 = document.getElementById('Loader_Element1');
		const Loader_Element2 = document.getElementById('Loader_Element2');
		const Loader_Element3 = document.getElementById('Loader_Element3');

		if (Loader_Element1 && Loader_Element2 && Loader_Element3 && Logo_Wrappper) {
			setTimeout(() => {
				Logo_Wrappper.style.transform = 'scale(0.9)';
				Logo_Wrappper.style.opacity = '0';

				Loader_Element3.style.transform = 'translateY(54px)';
				Loader_Element3.style.opacity = '0';
				setTimeout(() => {
					router.setPanel('main');
				}, 500);
			}, 50 + 500 + 200);
		}
	}, []);

	return (
		<Panel
			id={id}
			router={router}
			// showAnimation={false}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				id="Logo_Wrappper"
				style={{
					transition: 'var(--loader_transition)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 4,
				}}
			>
				<div
					id="Loader_Element1"
					style={{
						fontFamily: 'sans-serif',
						lineHeight: '48px',
						fontWeight: 'bolder',
						fontSize: 48,
						color: 'var(--text_color)',
						letterSpacing: 1,
						transform: 'translateX(0)',
						transition: 'var(--loader_transition)',
						opacity: 1,
					}}
				>
					K<div style={{ display: 'inline', color: 'var(--primary_color)' }}>O</div>INZ
				</div>
				<div
					id="Loader_Element2"
					style={{
						fontFamily: 'sans-serif',
						lineHeight: '20px',
						fontWeight: 'bold',
						fontSize: 20,
						color: 'var(--primary_color)',
						opacity: 0.5,
						letterSpacing: 1,
						transform: 'translateX(0)',
						transition: 'var(--loader_transition)',
					}}
				>
					v4.0
				</div>
			</div>
			<div
				id="Loader_Element3"
				style={{
					position: 'fixed',
					boxSizing: 'border-box',
					width: 'calc(100vw - 32px)',
					bottom: bottom,
					padding: 18,
					lineHeight: '18px',
					fontSize: 18,
					color: 'var(--hint_color)',
					opacity: showTextLoading ? 0.5 : 0,
					transition: 'var(--loader_transition)',
					textAlign: 'center',
				}}
			>
				Загрузка
			</div>
		</Panel>
	);
};

export default Loader;
