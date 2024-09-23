import usePlatform from 'hooks/usePlatform';
import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes } from 'react';
import { AppPanel } from 'router/routes';
import { IRouter } from 'router/types';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	id: AppPanel;
	router: IRouter;
}

const Panel = ({ id, children, style, router }: Props) => {
	const { platform } = usePlatform();
	const { bottom } = useSafeInsets();

	const isTabbarOpened = router.data.tabbarShow;

	return (
		<div id={id} style={style} className="PanelWrapper">
			<div
				className="Panel"
				style={{
					borderTop: platform === 'tg' ? 'solid 1px var(--bg_color_2)' : undefined,
					paddingBottom: `calc(${bottom} + 16px + ${isTabbarOpened ? '56px' : '0px'})`,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Panel;
