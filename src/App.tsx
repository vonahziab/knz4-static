import getWebApp from 'functions/getWebApp';
import { FC, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Router, useRouter } from 'router';

const App: FC = () => {
	useEffect(() => {
		const WebApp = getWebApp();
		WebApp.ready();
	}, []);

	const router = useRouter();

	return (
		<SkeletonTheme
			baseColor="var(--skeleton_base_color)"
			highlightColor="var(--skeleton_highlight_color)"
		>
			<Router router={router} />
		</SkeletonTheme>
		// 	<TestPanel />
	);
};

export default App;
