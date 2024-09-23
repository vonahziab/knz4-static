import getWebApp from '../getWebApp';

const showAlert = (text: string) => {
	const WebApp = getWebApp();

	return WebApp.isVersionAtLeast('6.2')
		? WebApp.showAlert(text)
		: console.log(`method .showAlert(${text}) required verison of Bot API 6.2`);
};

export default showAlert;
