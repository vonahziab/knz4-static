import usePlatform from 'hooks/usePlatform';

const useSafeInsets = () => {
	const { platform } = usePlatform();

	return {
		bottom:
			platform === 'tg' ? 'var(--tg-safe-area-inset-bottom)' : 'env(safe-area-inset-bottom)',
		top: platform === 'tg' ? '0px' : 'env(safe-area-inset-top)',
	};
};

export default useSafeInsets;
