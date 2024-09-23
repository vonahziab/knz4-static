import useSafeInsets from 'hooks/useSafeInsets';

type Props = {};

const Tabbar = (props: Props) => {
	const { bottom } = useSafeInsets();

	return (
		<div
			style={{
				position: 'fixed',
				height: 64,
				width: '100vw',
				left: 0,
				bottom: 0,
				paddingBottom: bottom,
				backgroundColor: 'var(--bg_color)',
			}}
		>
			<div
				style={{
					borderTop: 'solid 1px var(--bg_color_2)',
					height: 64,
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'var(--bg_color)',
					color: 'white',
					fontSize: 24,
				}}
			>
				Tabbar
			</div>
		</div>
	);
};

export default Tabbar;
