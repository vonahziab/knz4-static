import React, { Children, HTMLAttributes } from 'react';
import { AppModal } from 'router/routes';
import { IRouter } from 'router/types';
import ModalWrapper from '../ModalWrapper';

interface Props extends HTMLAttributes<HTMLElement> {
	selectedModal?: AppModal;
	router: IRouter;
}

const ModalRoot = ({ children, selectedModal, router }: Props) => {
	const array = Children.toArray(children);
	const nodes = array.filter(item => React.isValidElement(item)) as React.ReactElement[];
	const modals = nodes.filter(i => typeof i.props.id === 'string');
	const modal = modals.find(i => i.props.id === selectedModal);

	return (
		<>
			{!router.data.popout && router.data.modal_id && (
				<ModalWrapper router={router}>{modal}</ModalWrapper>
			)}
		</>
	);
};

export default ModalRoot;
