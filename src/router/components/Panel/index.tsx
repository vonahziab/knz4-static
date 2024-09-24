import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect, useState } from 'react';
import { AppPanel } from 'router/routes';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppPanel;
	router: IRouter;
	showAnimation?: boolean;
}

const Panel = ({ id, children, style, router, showAnimation = true }: Props) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 50);
	}, []);

	const { bottom } = useSafeInsets();
	const isTabbarOpened = router.data.tabbarShow;

	return (
		<div id={id} style={style} className="PanelWrapper">
			<div
				className="Panel"
				style={{
					transition: 'var(--show_content_transition)',
					opacity: show || !showAnimation ? 1 : 0,
					paddingBottom: `calc(${bottom} + 16px + ${isTabbarOpened ? '56px' : '0px'})`,
					...style,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Panel;
