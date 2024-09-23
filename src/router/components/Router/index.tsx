import config from 'config';
import getWebApp from 'functions/getWebApp';
import { useEffect } from 'react';
import routes from 'router/routes';
import { IRouter } from 'router/types';
import ModalRoot from '../ModalRoot';
import Root from '../Root';
import Tabbar from '../Tabbar';
import View from '../View';

const Router = ({ router }: { router: IRouter }) => {
	const WebApp = getWebApp();

	useEffect(() => {
		router.setTheme(WebApp?.colorScheme || 'light');

		const themeChanged = () => {
			if (WebApp?.isVersionAtLeast('6.9')) {
				WebApp?.setHeaderColor(config.colors.header);
			} else {
				console.log(`method .setHeaderColor() required verison of Bot API 6.9`);
			}

			router.setTheme(WebApp?.colorScheme || 'light');
		};

		themeChanged();

		WebApp?.onEvent('themeChanged', themeChanged);
		return () => WebApp?.offEvent('themeChanged', themeChanged);
	}, []);

	return (
		<>
			{router.data.popout}

			<ModalRoot selectedModal={router.data.modal_id} router={router}>
				{routes.modals.map((modal, index) => {
					const Component = modal.modal;
					return <Component key={index} id={modal.id} router={router} />;
				})}
			</ModalRoot>

			<Root selectedView={router.data.activeView}>
				{routes.views.map((view, index) => (
					<View
						key={index}
						vieweId={index}
						id={view.id}
						selectedPanel={router.data.activePanel[index]}
						router={router}
					>
						{view.panels.map((panel, index2) => {
							const Component = panel.panel;
							return (
								<Component
									key={index2}
									id={panel.id}
									viewId={index}
									router={router}
								/>
							);
						})}
					</View>
				))}
			</Root>

			<Tabbar router={router} />
		</>
	);
};

export default Router;
