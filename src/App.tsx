import config from 'config';
import getWebApp from 'functions/TG/getWebApp';
import { FC, useEffect } from 'react';
import { Router, useRouter } from 'router';
import { getViewIdFromName } from 'router/methods/handle';

const App: FC = () => {
	const router = useRouter();
	const WebApp = getWebApp();

	useEffect(() => {
		WebApp.ready();
		WebApp.expand();
	}, []);

	useEffect(() => {
		if (!WebApp.isVersionAtLeast('6.1')) return;

		const viewId = getViewIdFromName(router.data.activeView);

		router.data.history[viewId].length > 1 || router.data.modal_id
			? WebApp?.BackButton.show()
			: WebApp?.BackButton.hide();

		WebApp?.BackButton.onClick(router.goBack);

		return () => WebApp?.BackButton.offClick(router.goBack);
	}, [
		router.data.activeView,
		router.data.history[getViewIdFromName(router.data.activeView)],
		router.data.modal_id,
	]);

	useEffect(() => {
		router.data.modal_id
			? WebApp.isVersionAtLeast('7.7') && WebApp.disableVerticalSwipes()
			: WebApp.isVersionAtLeast('7.7') && WebApp.enableVerticalSwipes();
	}, [router.data.modal_id]);

	useEffect(() => {
		const themeChanged = () => {
			WebApp?.isVersionAtLeast('6.9') &&
				WebApp?.setHeaderColor(config.colors[WebApp?.colorScheme].header);

			router.setTheme(WebApp?.colorScheme || 'light');
		};

		themeChanged();

		WebApp?.onEvent('themeChanged', themeChanged);
		return () => WebApp?.offEvent('themeChanged', themeChanged);
	}, []);

	return <Router router={router} />;
};

export default App;
