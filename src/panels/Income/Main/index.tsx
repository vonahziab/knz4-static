import { useEffect } from 'react';
import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Main = ({ id, router }: PanelProps) => {
	useEffect(() => {
		router.setTabbarShow(true);
	}, []);

	return (
		<Panel id={id} router={router}>
			<h1>Income</h1>
		</Panel>
	);
};

export default Main;
