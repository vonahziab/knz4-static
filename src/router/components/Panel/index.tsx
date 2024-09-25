import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect } from 'react';
import { AppPanel } from 'router/routes';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppPanel;
	router: IRouter;
	showAnimation?: boolean;
}

const Panel = ({ id, children, style, router, showAnimation = true }: Props) => {
	const { bottom } = useSafeInsets();
	const isTabbarOpened = router.data.tabbarShow;

	useEffect(() => {
		const Content = document.getElementById(`${id}_PanelContent`);
		if (Content && showAnimation) {
			setTimeout(() => {
				Content.style.opacity = '1';
			}, 0);
		}
	}, []);

	return (
		<div id={`${id}_PanelWrapper`} className="PanelWrapper">
			<div
				id={`${id}_PanelContent`}
				className="PanelContent"
				style={{
					transition: 'var(--panel_content_transition)',
					opacity: showAnimation ? 0 : 1,
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
