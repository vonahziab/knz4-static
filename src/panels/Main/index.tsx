import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Test = ({ id, router }: PanelProps) => {
	return (
		<Panel id={id} router={router}>
			Test
			<button onClick={() => router.goForward('test')}>Test</button>
		</Panel>
	);
};

export default Test;
