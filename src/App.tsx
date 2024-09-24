import { FC } from 'react';
import { Router, useRouter } from 'router';

const App: FC = () => {
	const router = useRouter();

	return <Router router={router} />;
};

export default App;
