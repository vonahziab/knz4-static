import { TelegramWebApps } from '../../../public/scripts/webapp';

const getWebApp = () => {
	const Telegram = (window as unknown as any).Telegram as TelegramWebApps.SDK;
	const WebApp = Telegram?.WebApp || {};

	return WebApp;
};

export default getWebApp;
