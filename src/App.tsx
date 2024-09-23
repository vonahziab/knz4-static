import { FC } from 'react';

const App: FC = () => {
	return (
		<div
			style={{
				height: '100%',
				overflow: 'scroll',
				position: 'absolute',
				bottom: '0',
				right: '0',
				top: '0',
				left: '0',
			}}
		>
			Hello, World! Koinz v0.8 :)
			<div
				style={{
					height: 24,
					width: '100%',
					backgroundColor: 'green',
				}}
			/>
			<div
				style={{
					height: 'env(--safe-area-inset-bottom)',
					width: '100%',
					backgroundColor: 'red',
				}}
			/>
			<div
				style={{
					height: 'var(--safe-area-inset-bottom)',
					width: '100%',
					backgroundColor: 'orange',
				}}
			/>
		</div>
	);
};

export default App;
