import config from 'config';
import useHaptic from 'hooks/useHaptic';
import useSafeInsets from 'hooks/useSafeInsets';
import { useEffect, useState } from 'react';
import routes, { AppView } from 'router/routes';
import { IRouter } from 'router/types';
import './index.css';

const Tabbar = ({ router }: { router: IRouter }) => {
	const haptic = useHaptic();

	const handleClick = (id: AppView) => {
		haptic.selection();
		router.setView(id);
	};

	const { bottom } = useSafeInsets();

	// Анимация
	const [tabbarShow, setTabbarShow] = useState(false);

	useEffect(() => {
		if (router.data.tabbarShow) {
			setTabbarShow(true);
		} else {
			setTimeout(() => {
				setTabbarShow(false);
			}, 200);
		}
	}, [router.data.tabbarShow]);

	useEffect(() => {
		const TabbarWrapper = document.getElementById('TabbarWrapper');

		if (TabbarWrapper) {
			if (router.data.tabbarShow) {
				setTimeout(() => {
					TabbarWrapper.style.transform = 'translateY(0)';
				}, 10);
			} else {
				TabbarWrapper.style.transform = 'translateY(100%)';
			}
		}
	}, [router.data.tabbarShow, tabbarShow]);

	return (
		<>
			{tabbarShow && (
				<div
					id="TabbarWrapper"
					className="TabbarWrapper"
					style={{
						paddingBottom: bottom,
						transition: 'var(--tabbar_transition)',
						transform: 'translateY(100%)',
					}}
				>
					<div
						className="VersionBlock"
						style={{
							transition: 'var(--tabbar_transition)',
							paddingBottom: bottom,
						}}
					>
						<div style={{ padding: 2 }}>V{config.version}</div>
					</div>
					<div className="Tabbar">
						{routes.views.map(
							item =>
								item.tabbar && (
									<div
										key={item.id}
										className="TabbarItem"
										onClick={() => handleClick(item.id)}
									>
										<div
											className={`TabbarItemIcon${
												router.data.activeView === item.id
													? '-selected'
													: ''
											}`}
											style={{
												height: item.tabbar.iconSize || 28,
												width: item.tabbar.iconSize || 28,
											}}
										>
											<item.tabbar.icon size={item.tabbar.iconSize} />
										</div>
										{item.tabbar.text && (
											<div
												className={`TabbarItemText${
													router.data.activeView === item.id
														? '-selected'
														: ''
												}`}
											>
												{item.tabbar.text}
											</div>
										)}
									</div>
								)
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Tabbar;
