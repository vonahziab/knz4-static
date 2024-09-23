import getWebApp from 'functions/getWebApp';
import React, { Children, HTMLAttributes, useEffect } from 'react';
import { AppPanel, IRouter } from 'router/types';
import Swiper from '../Swiper';

interface Props extends HTMLAttributes<HTMLElement> {
	vieweId: number;
	id: string;
	selectedPanel: AppPanel;
	router: IRouter;
}

const View = ({ vieweId, children, selectedPanel, router }: Props) => {
	const WebApp = getWebApp();

	useEffect(() => {
		// console.log(vieweId, router.data.history[vieweId].length);
		router.data.history[vieweId].length > 1 || router.data.modal_id
			? WebApp?.BackButton.show()
			: WebApp?.BackButton.hide();

		router.data.modal_id
			? WebApp?.BackButton.onClick(router.closeModal)
			: WebApp?.BackButton.onClick(router.goBack);

		return () =>
			router.data.modal_id
				? WebApp?.BackButton.offClick(router.closeModal)
				: WebApp?.BackButton.offClick(router.goBack);
	}, [vieweId, router.data.history[vieweId], router.data.modal_id]);

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
