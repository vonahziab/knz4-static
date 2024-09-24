const localStorageValue = (key: string) => {
	try {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : undefined;
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

const setLocalStorage = (key: string, value: string) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
};

const removeLocalStorage = (key: string) => {
	try {
		window.localStorage.removeItem(key);
	} catch (error) {
		console.log(error);
	}
};

export const useLocalStorage = (key: string) => {
	const setItem = (value: string) => setLocalStorage(key, value);
	const getItem = () => localStorageValue(key);
	const removeItem = () => removeLocalStorage(key);
	return { setItem, getItem, removeItem };
};

export const useLocalStorageValue = (key: string) => {
	return () => localStorageValue(key);
};
export const useSetLocalStorage = (key: string) => {
	return (value: string) => setLocalStorage(key, value);
};
export const useRemoveLocalStorage = (key: string) => {
	return () => removeLocalStorage(key);
};

export default useLocalStorage;
