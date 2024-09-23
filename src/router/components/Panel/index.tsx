import { HTMLAttributes } from 'react';
import { AppPanel, IRouter } from 'router/types';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppPanel;
	router?: IRouter;
}

const Panel = ({ id, children, style, router }: Props) => {
	return (
		<div id={id} style={style} className="Page">
			{children}

			{/* {router?.data.tabbarShow && <div style={{ height: 60 }} />} */}
		</div>
	);
};

export default Panel;
