import KoinzTextLogo from 'components/blocks/KoinzTextLogo';
import useSafeInsets from 'hooks/useSafeInsets';
import { useEffect, useState } from 'react';
import { Panel } from 'router';
import { PanelProps } from 'router/types';
import './index.css';

const Loader = ({ id, router }: PanelProps) => {
	const { bottom } = useSafeInsets();
	const [showTextLoading, setShowTextLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowTextLoading(true), 2550);

		const PanelLoader_LogoWrappper = document.getElementById('PanelLoader_LogoWrappper');
		const PanelLoader_LoadingText = document.getElementById('PanelLoader_LoadingText');

		if (PanelLoader_LoadingText && PanelLoader_LogoWrappper) {
			setTimeout(() => {
				PanelLoader_LogoWrappper.style.transform = 'scale(0.9)';
				PanelLoader_LogoWrappper.style.opacity = '0';

				PanelLoader_LoadingText.style.transform = 'translateY(54px)';
				PanelLoader_LoadingText.style.opacity = '0';
				setTimeout(() => {
					router.setTabbarShow(true);
					router.setPanel('home_main');
				}, 500);
			}, 50 + 500 + 200);
		}
	}, []);

	return (
		<Panel
			id={id}
			router={router}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div id="PanelLoader_LogoWrappper">
				<KoinzTextLogo />
				<div id="PanelLoader_Logo_Version">v4.0</div>
			</div>
			<div
				id="PanelLoader_LoadingText"
				style={{
					bottom: bottom,
					opacity: showTextLoading ? 0.5 : 0,
				}}
			>
				Загрузка
			</div>
		</Panel>
	);
};

export default Loader;
