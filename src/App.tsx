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
		WebApp.isVersionAtLeast('6.1') && WebApp.setHeaderColor(config.colors.header);
	}, []);

	useEffect(() => {
		if (!WebApp.isVersionAtLeast('6.1')) return;

		const viewId = getViewIdFromName(router.data.activeView);

		router.data.history[viewId].length > 1 || router.data.modal_id
			? WebApp?.BackButton.show()
			: WebApp?.BackButton.hide();

		router.data.modal_id
			? WebApp?.BackButton.onClick(router.closeModal)
			: WebApp?.BackButton.onClick(router.goBack);

		return () =>
			router.data.modal_id
				? WebApp?.BackButton.offClick(router.closeModal)
				: WebApp?.BackButton.offClick(router.goBack);
	}, [
		router.data.activeView,
		router.data.history[getViewIdFromName(router.data.activeView)],
		router.data.modal_id,
	]);

	return <Router router={router} />;
};

export default App;
