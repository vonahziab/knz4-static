import getWebApp from 'functions/TG/getWebApp';

export type Platform = 'tg' | 'vk' | 'web';

const usePlatform = (): {
	platform: 'tg' | 'web' | 'vk';
} => {
	const WebApp = getWebApp();

	const isTg = !!WebApp.initData;
	const isVk = false;

	return {
		platform: isTg ? 'tg' : isVk ? 'vk' : 'web',
	};
};

export default usePlatform;
