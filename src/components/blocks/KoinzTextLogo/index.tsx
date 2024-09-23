type Props = {};

const KoinzTextLogo = (props: Props) => {
	return (
		<div
			style={{
				fontFamily: 'sans-serif',
				lineHeight: '48px',
				fontWeight: 'bolder',
				fontSize: 48,
				color: 'var(--text_color)',
				letterSpacing: 1,
			}}
		>
			K<div style={{ display: 'inline', color: 'var(--primary_color)' }}>O</div>INZ
		</div>
	);
};

export default KoinzTextLogo;
