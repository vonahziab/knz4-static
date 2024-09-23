import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Main = ({ id, router }: PanelProps) => {
	return (
		<Panel id={id} router={router}>
			<button
				style={{
					marginBottom: 16,
				}}
				onClick={() => router.goForward('test')}
			>
				Test
			</button>
			<button
				style={{
					marginBottom: 16,
				}}
				onClick={() => router.setTabbarShow(!router.data.tabbarShow)}
			>
				Test Tabbar
			</button>
		</Panel>
	);
};

export default Main;
