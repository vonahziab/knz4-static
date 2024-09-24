import config from 'config';
import getWebApp from 'functions/TG/getWebApp';
import { useLocalStorageValue } from 'hooks/useLocalStorage';
import usePlatform from 'hooks/usePlatform';
import i18next from 'i18next';
import { useEffect } from 'react';
import { getViewIdFromName } from 'router/methods/handle';
import { IRouter } from 'router/types';

const useService = (router: IRouter) => {
	const WebApp = getWebApp();
	const { platform } = usePlatform();
	const localStorageLang = useLocalStorageValue('lang');
	const localStorageTheme = useLocalStorageValue('theme');

	// * All
	// + Language
	useEffect(() => {
		const langValue = localStorageLang();
		langValue && i18next.changeLanguage(langValue);
	}, []);

	// * Tg
	// + Init & Theme
	useEffect(() => {
		if (platform !== 'tg') return;
		WebApp.ready();

		if (!WebApp.isVersionAtLeast('6.9')) return;

		const themeChanged = () => {
			platform === 'tg'
				? router.setTheme(WebApp?.colorScheme || 'light')
				: router.setTheme('dark');
		};

		themeChanged();

		WebApp?.onEvent('themeChanged', themeChanged);
		return () => WebApp?.offEvent('themeChanged', themeChanged);
	}, []);

	// + Theme
	useEffect(() => {
		if (platform !== 'tg') return;
		if (!WebApp.isVersionAtLeast('6.9')) return;

		if (router.data.theme === 'light' || router.data.theme === 'dark') {
			WebApp.setHeaderColor(config.colors[router.data.theme].header);
		}
	}, [router.data.theme]);

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
		const v = localStorageTheme();
		router.setTheme(((v === 'light' || v === 'dark') && v) || 'light');
	}, []);

	// * VK

	return;
};

export default useService;
