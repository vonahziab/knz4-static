import useLocalStorage from 'hooks/useLocalStorage';
import i18next from 'i18next';
import { FC, useEffect } from 'react';
import { Router, useRouter } from 'router';

const App: FC = () => {
	const router = useRouter();
	const { getItem } = useLocalStorage('lang');

	useEffect(() => {
		const langValue: string = getItem();

		if (langValue) {
			i18next.changeLanguage(langValue);
		}
	}, []);

	return <Router router={router} />;
};

export default App;
