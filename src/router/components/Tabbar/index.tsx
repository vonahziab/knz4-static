import config from 'config';
import useHaptic from 'hooks/useHaptic';
import useSafeInsets from 'hooks/useSafeInsets';
import { useEffect } from 'react';
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
	useEffect(() => {
		const TabbarWrapper = document.getElementById('TabbarWrapper');

		if (TabbarWrapper) {
			setTimeout(() => {
				TabbarWrapper.style.transform = `translateY(0)`;
			}, 0);
		}
	}, [router.data.tabbarShow]);

	return (
		<>
			{router.data.tabbarShow && (
				<div
					id="TabbarWrapper"
					className="TabbarWrapper"
					style={{
						paddingBottom: bottom,
					}}
				>
					<div
						className="VersionBlock"
						style={{
							paddingBottom: bottom,
							transition: 'var(--tabbar_wrapper_transition)',
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
