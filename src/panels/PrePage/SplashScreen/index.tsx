import KoinzTextLogo from 'components/blocks/KoinzTextLogo';
import useSafeInsets from 'hooks/useSafeInsets';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Panel } from 'router';
import { PanelProps } from 'router/types';
import './index.css';

const SplashScreen = ({ id, router }: PanelProps) => {
	const { t } = useTranslation();
	const { bottom } = useSafeInsets();
	const [showTextLoading, setShowTextLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setShowTextLoading(true), 2550);

		const PanelSplashScreen_LogoWrappper = document.getElementById(
			'PanelSplashScreen_LogoWrappper'
		);
		const PanelSplashScreen_LoadingText = document.getElementById(
			'PanelSplashScreen_LoadingText'
		);

		if (PanelSplashScreen_LoadingText && PanelSplashScreen_LogoWrappper) {
			setTimeout(() => {
				PanelSplashScreen_LogoWrappper.style.transform = 'scale(0.9)';
				PanelSplashScreen_LogoWrappper.style.opacity = '0';

				PanelSplashScreen_LoadingText.style.transform = 'translateY(54px)';
				PanelSplashScreen_LoadingText.style.opacity = '0';
				setTimeout(() => {
					router.setTabbarShow(true);
					router.setPanel('home_main');
				}, 500); // анимация исчезноваения
			}, 0 + 500 + 250); // анимация появления + задержка (будет ждать ответ от сервера)
		}
	}, []);

	return (
		<Panel
			id={id}
			router={router}
			style={{
				height: '100%',
				width: '100%',
				boxSizing: 'border-box',
				paddingBottom: `calc(16px + ${bottom})`,
			}}
		>
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div id="PanelSplashScreen_LogoWrappper">
					<KoinzTextLogo />
					<div id="PanelSplashScreen_Logo_Version">v4.0</div>
				</div>
			</div>
			<div
				id="PanelSplashScreen_LoadingText"
				style={{
					bottom: 0,
					opacity: showTextLoading ? 0.5 : 0,
					paddingBottom: `calc(16px + ${bottom})`,
				}}
			>
				{t('splash_screen.loading')}
			</div>
		</Panel>
	);
};

export default SplashScreen;
