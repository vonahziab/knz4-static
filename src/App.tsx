import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			Hello, World! Koinz v0.2 :)
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
		</>
	);
};

export default App;
