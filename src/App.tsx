import { FC } from 'react';

const App: FC = () => {
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
					backgroundColor: 'rgba(0, 0, 0)',
					padding: '16px 16px 0px',
					paddingBottom: 'calc(var(--safe-area-inset-bottom) + 16px)',
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						boxSizing: 'border-box',
						paddingBottom: 100,
					}}
				>
					<div style={{ fontSize: 20, textAlign: 'center' }}>v0.14</div>

					<div
						style={{
							height: 'var(--safe-area-inset-bottom)',
							width: '100%',
							backgroundColor: 'orange',
							marginBottom: 16,
						}}
					/>

					{new Array(15).fill(1).map((i, index) => {
						return (
							<div
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',

									height: 50,
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
					height: 100,
					width: '100vw',
					position: 'fixed',
					left: 0,
					bottom: 0,
					paddingBottom: 'var(--safe-area-inset-bottom)',
					backgroundColor: 'white',
				}}
			>
				<div
					style={{
						height: 100,
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'white',
						color: 'black',
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
