import getWebApp from 'functions/getWebApp';
import useSafeInsets from 'hooks/useSafeInsets';
import VersionBlock from 'router/components/VersionBlock';
import routes from 'router/routes';
import { AppView, IRouter } from 'router/types';
import './index.css';

const Tabbar = ({ router }: { router: IRouter }) => {
	const WebApp = getWebApp();

	const handleClick = (id: AppView) => {
		WebApp?.HapticFeedback.selectionChanged();
		router.setView(id);
	};

	const { bottom } = useSafeInsets();

	return router.data.tabbarShow ? (
		<>
			<VersionBlock />
			<div
				className="TabbarWrapper"
				style={{
					paddingBottom: bottom,
				}}
			>
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
											router.data.activeView === item.id ? '-selected' : ''
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
		</>
	) : (
		<></>
	);
};

export default Tabbar;
