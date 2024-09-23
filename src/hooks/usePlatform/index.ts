import getWebApp from 'functions/getWebApp';

export type Platform = 'tg' | 'vk' | 'web';

const usePlatform = (): {
	platform: Platform;
} => {
	const tgWebApp = getWebApp();

	const isTg = !!tgWebApp.initData;
	const isVk = false;

	return {
		platform: isTg ? 'tg' : isVk ? 'vk' : 'web',
	};
};

export default usePlatform;
