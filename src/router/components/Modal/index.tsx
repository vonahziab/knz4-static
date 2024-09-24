import { HTMLAttributes } from 'react';
import { AppModal } from 'router/routes';
import { IRouter } from 'router/types';
import Content from './components/Content';
import Header from './components/Header';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppModal;
	router: IRouter;
	header?: string;
	showAnimation?: boolean;
}

const Modal = ({ id, children, style, router, header, showAnimation = true }: Props) => {
	return (
		<div
			id={id}
			style={{
				maxHeight: '100%',
				width: '100%',
				backgroundColor: 'var(--bg_color)',
				display: 'block',
				borderRadius: '16px 16px 0 0',
				overflowY: 'scroll',
				transition: 'var(--default_transition)',
				transform: 'translateY(100%)',
			}}
			onClick={e => e.stopPropagation()}
		>
			<Header id={id} router={router} header={header} />
			<Content style={style} children={children} showAnimation={showAnimation} />
		</div>
	);
};

export default Modal;
