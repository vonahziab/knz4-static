import config from 'config';
import usePlatform from 'hooks/usePlatform';
import { FC } from 'react';

const App: FC = () => {
	const { platform } = usePlatform();

	const safeAreaInsetBottom =
		platform === 'tg' ? 'var(--tg-safe-area-inset-bottom)' : 'env(safe-area-inset-bottom)';

	return (
		<div>
			<div
				style={{
					height: '100%',
					overflow: 'scroll',
					position: 'absolute',
					bottom: '0',
					right: '0',
					top: '0',
					left: '0',

					color: 'white',
					backgroundColor: '#0E0D0B',
					padding: '16px 16px 0px',
					paddingBottom: `calc(${safeAreaInsetBottom} + 16px)`,
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						boxSizing: 'border-box',
						paddingBottom: 64,
					}}
				>
					{/* <div
						style={{
							height: safeAreaInsetBottom,
							width: '100%',
							backgroundColor: 'orange',
							marginBottom: 16,
						}}
					/> */}

					{new Array(15).fill(1).map((i, index) => {
						return (
							<div
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',

									height: 200,
									width: '100%',
									backgroundColor: 'blue',
									marginBottom: index !== 14 ? 16 : undefined,
									borderRadius: 16,
								}}
							>
								{index + 1}
							</div>
						);
					})}
				</div>
			</div>

			<div
				style={{
					position: 'fixed',
					bottom: 0,
					right: 0,
					zIndex: 999,
					fontSize: 8,
					color: 'rgba(255, 255, 255, 0.2)',
					paddingBottom: safeAreaInsetBottom,
				}}
			>
				<div style={{ padding: 4 }}>{config.version}</div>
			</div>
			<div
				style={{
					height: 64,
					width: '100vw',
					position: 'fixed',
					left: 0,
					bottom: 0,
					paddingBottom: safeAreaInsetBottom,
					backgroundColor: '#0E0D0B',
				}}
			>
				<div
					style={{
						borderTop: 'solid 1px #181715',
						height: 64,
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#0E0D0B',
						color: 'white',
						fontSize: 24,
					}}
				>
					Tabbar
				</div>
			</div>
		</div>
	);
};

export default App;
