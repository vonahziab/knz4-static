import { useRecoilValue } from 'recoil';
import {
	useCloseModal,
	useGoBack,
	useGoForward,
	useSetModal,
	useSetPopout,
	useSetTabbarShow,
	useSetTheme,
	useSetView,
} from './methods';
import {
	app_modal_id,
	app_modal_swipe_enabled,
	app_panel,
	app_tabbar_show,
	app_theme,
	app_view,
	app_view_history,
	popout_element,
} from './state';
import { IRouter } from './types';

export const useRouter = () => {
	const router: IRouter = {
		goForward: useGoForward(),
		goBack: useGoBack(),
		setView: useSetView(),
		setTheme: useSetTheme(),
		setModal: useSetModal(),
		closeModal: useCloseModal(),
		setPopout: useSetPopout(),
		setTabbarShow: useSetTabbarShow(),
		data: {
			theme: useRecoilValue(app_theme),
			activeView: useRecoilValue(app_view),
			history: useRecoilValue(app_view_history),
			activePanel: useRecoilValue(app_panel),
			tabbarShow: useRecoilValue(app_tabbar_show),
			modal_id: useRecoilValue(app_modal_id),
			modal_swipe_enabled: useRecoilValue(app_modal_swipe_enabled),
			popout: useRecoilValue(popout_element),
		},
	};

	return router;
};

export { Panel, Router } from './components';
