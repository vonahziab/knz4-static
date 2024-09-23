import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			Hello, World! Koinz v0.6 :)
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
			<div
				style={{
					height: 'var(--tg-viewport-stable-height)',
					width: '100%',
					backgroundColor: 'blue',
				}}
			/>
		</>
	);
};

export default App;
