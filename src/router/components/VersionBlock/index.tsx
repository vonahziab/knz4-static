import config from 'config';
import useSafeInsets from 'hooks/useSafeInsets';

type Props = {};

const VersionBlock = (props: Props) => {
	const { bottom } = useSafeInsets();

	return (
		<div
			style={{
				position: 'fixed',
				bottom: 0,
				right: 0,
				zIndex: 1000,
				fontSize: 8,
				color: 'var(--text_color)',
				opacity: 0.15,
				paddingBottom: bottom,
			}}
		>
			<div style={{ padding: 2 }}>V{config.version}</div>
		</div>
	);
};

export default VersionBlock;
