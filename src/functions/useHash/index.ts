import { useEffect, useState } from 'react';

export const useHash = (): [string, (s: string) => void] => {
	const [hash, setHash] = useState(window.location.hash);
	useEffect(() => {
		const onHashChange = () => {
			setHash(window.location.hash);
		};
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);

	const _setHash = (s: string) => {
		setHash(s);
		window.location.hash = s;
	};

	return [hash, _setHash];
};
