import config from 'config';
import getWebApp from 'functions/TG/getWebApp';
import usePlatform from 'hooks/usePlatform';
import { useEffect } from 'react';
import { getViewIdFromName } from 'router/methods/handle';
import { IRouter } from 'router/types';

const useService = (router: IRouter) => {
	const WebApp = getWebApp();
	const { platform } = usePlatform();

	// * Tg
	// + Init & Theme
	useEffect(() => {
		if (platform !== 'tg') return;
		WebApp.ready();

		if (!WebApp.isVersionAtLeast('6.9')) return;

		const themeChanged = () => {
			WebApp.setHeaderColor(config.colors[WebApp?.colorScheme].header);

			platform === 'tg'
				? router.setTheme(WebApp?.colorScheme || 'light')
				: router.setTheme('dark');
		};

		themeChanged();

		WebApp?.onEvent('themeChanged', themeChanged);
		return () => WebApp?.offEvent('themeChanged', themeChanged);
	}, []);

	// + BackButton
	useEffect(() => {
		if (platform !== 'tg') return;
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

	// + VerticalSwipe
	useEffect(() => {
		if (platform !== 'tg') return;
		if (!WebApp.isVersionAtLeast('7.7')) return;

		router.data.modal_id ? WebApp.disableVerticalSwipes() : WebApp.enableVerticalSwipes();
	}, [router.data.modal_id]);

	// * Web
	// + Theme
	useEffect(() => {
		if (platform !== 'web') return;
		router.setTheme('light');
	}, []);

	// * VK

	return;
};

export default useService;
