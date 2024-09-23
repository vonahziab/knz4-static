import config from 'config';
import useSafeInsets from 'hooks/useSafeInsets';
import './index.css';

const VersionBlock = () => {
	const { bottom } = useSafeInsets();

	return (
		<div
			className="VersionBlock"
			style={{
				paddingBottom: bottom,
			}}
		>
			<div style={{ padding: 2 }}>V{config.version}</div>
		</div>
	);
};

export default VersionBlock;
