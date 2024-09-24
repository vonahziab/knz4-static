import usePlatform from 'hooks/usePlatform';
import { HTMLAttributes } from 'react';
import { AppModal } from 'router/routes';
import { IRouter } from 'router/types';
import Content from './components/Content';
import Header from './components/Header';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppModal;
	router: IRouter;
	header?: string;
	showAnimation?: boolean;
}

const Modal = ({ id, children, style, router, header, showAnimation = true }: Props) => {
	const { platform } = usePlatform();
	return (
		<div
			id={id}
			className="Modal"
			onClick={e => e.stopPropagation()}
			style={{
				borderRadius: platform !== 'tg' ? '16px 16px 0 0' : undefined,
			}}
		>
			<Header id={id} router={router} header={header} />
			<Content style={style} children={children} showAnimation={showAnimation} id={id} />
		</div>
	);
};

export default Modal;
