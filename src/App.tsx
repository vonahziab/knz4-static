import getWebApp from 'functions/getWebApp';
import { FC, useEffect } from 'react';
import { Router, useRouter } from 'router';

const App: FC = () => {
	const router = useRouter();

	useEffect(() => {
		const WebApp = getWebApp();
		WebApp.ready();
	}, []);

	return <Router router={router} />;
};

export default App;
