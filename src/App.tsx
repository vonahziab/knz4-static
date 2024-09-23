import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			Hello, World! Koinz v0.1 :)
			<div
				style={{
					height: 24,
					width: '100%',
					backgroundColor: 'green',
				}}
			/>
			<div
				style={{
					height: 'var(--safe-area-inset-bottom)',
					width: '100%',
					backgroundColor: 'red',
				}}
			/>
		</>
	);
};

export default App;
