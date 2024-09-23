import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Main = ({ id, router }: PanelProps) => {
	return (
		<Panel id={id} router={router} style={{ gap: 16 }}>
			<h1>Home</h1>
			<button onClick={() => router.goForward('test')}>Go to Test Panel</button>
			<button onClick={() => router.setTabbarShow(!router.data.tabbarShow)}>
				Toggle Tabbar
			</button>
			<button onClick={() => router.setModal('test')}>Go to Test Modal</button>
		</Panel>
	);
};

export default Main;
