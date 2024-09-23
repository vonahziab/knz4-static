import usePlatform from 'hooks/usePlatform';

const useSafeInsets = () => {
	const { platform } = usePlatform();

	const safeAreaInsetBottom =
		platform === 'tg' ? 'var(--tg-safe-area-inset-bottom)' : 'env(safe-area-inset-bottom)';

	return {
		bottom: safeAreaInsetBottom,
	};
};

export default useSafeInsets;
