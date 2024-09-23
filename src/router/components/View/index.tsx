import React, { Children, HTMLAttributes } from 'react';
import { AppPanel } from 'router/routes';
import { IRouter } from 'router/types';
import Swiper from '../Swiper';

interface Props extends HTMLAttributes<HTMLElement> {
	vieweId: number;
	id: string;
	selectedPanel: AppPanel;
	router: IRouter;
}

const View = ({ vieweId, children, selectedPanel, router }: Props) => {
	const array = Children.toArray(children);
	const nodes = array.filter(item => React.isValidElement(item)) as React.ReactElement[];
	const panels = nodes.filter(i => typeof i.props.id === 'string');
	const panel = panels.find(i => i.props.id === selectedPanel);

	return (
		<>
			<Swiper
				router={router}
				disabled={!(router.data.history[vieweId].length > 1)}
				onSwipeBackEnd={router.goBack}
			/>
			{panel}
		</>
	);
};

export default View;
