import Tabbar from 'components/Tabbar';
import TestPanel from 'components/Test';
import VersionBlock from 'components/VersionBlock';
import config from 'config';
import getWebApp from 'functions/getWebApp';
import { FC, useEffect } from 'react';

const App: FC = () => {
	useEffect(() => {
		const WebApp = getWebApp();
		console.log(WebApp);

		WebApp.ready();

		const themeChanged = () => {
			if (WebApp.isVersionAtLeast('6.9')) {
				WebApp.setHeaderColor(config.colors.header);
			} else {
				console.log('.setHeaderColor unavailable');
			}
		};

		themeChanged();

		WebApp.onEvent('themeChanged', themeChanged);
		return () => WebApp.offEvent('themeChanged', themeChanged);
	}, []);

	return (
		<>
			<TestPanel />
			<VersionBlock />
			<Tabbar />
		</>
	);
};

export default App;
