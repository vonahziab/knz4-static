import getWebApp from 'functions/getWebApp';

export type Platform = 'tg' | 'vk' | 'web';

const usePlatform = (): {
	platform: Platform;
} => {
	const WebApp = getWebApp();

	const isTg = !!WebApp.initData;
	const isVk = false;

	return {
		platform: isTg ? 'tg' : isVk ? 'vk' : 'web',
	};
};

export default usePlatform;
