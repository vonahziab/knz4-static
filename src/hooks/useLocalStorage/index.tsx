export const useLocalStorage = (key: string) => {
	const setItem = (value: string) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};

	const getItem = (): any => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : undefined;
		} catch (error) {
			console.log(error);
			return undefined;
		}
	};

	const removeItem = () => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
	};

	return { setItem, getItem, removeItem };
};

export default useLocalStorage;
