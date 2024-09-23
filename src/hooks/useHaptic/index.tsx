import getWebApp from 'functions/getWebApp';
import usePlatform from 'hooks/usePlatform';

const useHaptic = () => {
	const WebApp = getWebApp();
	const { platform } = usePlatform();

	const impact_light =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.impactOccurred('light')
			: () => {};
	const impact_medium =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.impactOccurred('medium')
			: () => {};
	const impact_heavy =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.impactOccurred('heavy')
			: () => {};
	const impact_rigid =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.impactOccurred('rigid')
			: () => {};
	const impact_soft =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.impactOccurred('soft')
			: () => {};

	const notification_success =
		platform === 'tg'
			? () =>
					WebApp.isVersionAtLeast('6.1') &&
					WebApp.HapticFeedback.notificationOccurred('success')
			: () => {};
	const notification_warning =
		platform === 'tg'
			? () =>
					WebApp.isVersionAtLeast('6.1') &&
					WebApp.HapticFeedback.notificationOccurred('warning')
			: () => {};
	const notification_error =
		platform === 'tg'
			? () =>
					WebApp.isVersionAtLeast('6.1') &&
					WebApp.HapticFeedback.notificationOccurred('error')
			: () => {};

	const selection =
		platform === 'tg'
			? () => WebApp.isVersionAtLeast('6.1') && WebApp.HapticFeedback.selectionChanged()
			: () => {};

	return {
		impact: {
			light: impact_light,
			medium: impact_medium,
			heavy: impact_heavy,
			rigid: impact_rigid,
			soft: impact_soft,
		},
		notification: {
			success: notification_success,
			warning: notification_warning,
			error: notification_error,
		},
		selection,
	};
};

export default useHaptic;
