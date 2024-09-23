import Tabbar from 'components/Tabbar';
import TestPanel from 'components/Test';
import VersionBlock from 'components/VersionBlock';
import config from 'config';
import getWebApp from 'functions/getWebApp';
import { FC, useEffect } from 'react';

const App: FC = () => {
	useEffect(() => {
		const WebApp = getWebApp();
		WebApp.ready();

		const themeChanged = () => {
			if (WebApp?.isVersionAtLeast('6.9')) {
				WebApp?.setHeaderColor(config.colors.header);
			}
		};

		WebApp?.onEvent('themeChanged', themeChanged);
		return () => WebApp?.offEvent('themeChanged', themeChanged);
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
