import React, { Children, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	selectedView: string;
}

const Root = ({ children, selectedView }: Props) => {
	const array = Children.toArray(children);
	const nodes = array.filter(item => React.isValidElement(item)) as React.ReactElement[];
	const views = nodes.filter(i => typeof i.props.id === 'string');
	const view = views.find(i => i.props.id === selectedView);

	return <>{view}</>;
};

export default Root;
