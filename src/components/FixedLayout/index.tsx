import { HTMLAttributes } from 'react';
import { IRouter } from 'router/types';

interface Props extends HTMLAttributes<HTMLElement> {
	router: IRouter;
}

const FixedLayout = ({ router, children, style }: Props) => {
	return (
		<div
			style={{
				zIndex: 1000,
				width: '100%',
				padding: 8,
				boxSizing: 'border-box',
				borderTop: '1px solid var(--hint20_color)',
				backgroundColor: 'var(--bg_color)',
				position: 'fixed',
				bottom: router.data.tabbarShow
					? 'calc(60px + env(safe-area-inset-bottom, 0px))'
					: 0,
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default FixedLayout;
