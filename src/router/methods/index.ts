import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import routes from 'router/routes';
import {
	app_modal_id,
	app_panel,
	app_tabbar_show,
	app_view,
	app_view_history,
	popout_element,
} from 'router/state';
import {
	_UseCloseModal,
	_UseGoBack,
	_UseGoForward,
	_UseSetModal,
	_UseSetPanel,
	_UseSetPopout,
	_UseSetTabbarShow,
	_UseSetView,
} from 'router/types';
import {
	getViewIdFromName,
	historyClear,
	historyPop,
	historyPush,
	panelClear,
	panelSet,
} from './handle';

export const useSetView: () => _UseSetView = () => {
	const [view, setView] = useRecoilState(app_view);
	const [panel, setPanel] = useRecoilState(app_panel);
	const [history, setHistory] = useRecoilState(app_view_history);
	// const setSnackbar = useSetRecoilState(router_snackbar);

	const _: _UseSetView = actionView => {
		if (view !== actionView) {
			// setSnackbar(undefined);
			return setView(actionView);
		}

		if (document.documentElement.scrollTop > 0) {
			return window.scrollTo({ top: 0, behavior: 'smooth' });
		}

		const viewId = getViewIdFromName(actionView);
		const { startPanel } = routes.views[viewId];

		setHistory(historyClear(history, startPanel, viewId));
		setPanel(panelClear(panel, startPanel, viewId));
		// setSnackbar(undefined);
	};

	return _;
};

export const useGoForward: () => _UseGoForward = () => {
	const [panel, setPanel] = useRecoilState(app_panel);
	const [history, setHistory] = useRecoilState(app_view_history);
	const activeView = useRecoilValue(app_view);
	const viewId = getViewIdFromName(activeView); // открытая view

	const _: _UseGoForward = (actionPanel, __viewId = -1) => {
		const _viewId = __viewId >= 0 ? __viewId : viewId;
		if (panel[_viewId] !== actionPanel) {
			setHistory(historyPush(history, _viewId, actionPanel));
			setPanel(panelSet(panel, _viewId, actionPanel));
		}
	};

	return _;
};

export const useSetPanel: () => _UseSetPanel = () => {
	const [panel, setPanel] = useRecoilState(app_panel);
	const [history, setHistory] = useRecoilState(app_view_history);
	const activeView = useRecoilValue(app_view);
	const viewId = getViewIdFromName(activeView); // открытая view

	const _: _UseSetPanel = (actionPanel, __viewId = -1) => {
		const _viewId = __viewId >= 0 ? __viewId : viewId;
		if (panel[_viewId] !== actionPanel) {
			setHistory(historyPush(historyPop(history, _viewId), _viewId, actionPanel));
			setPanel(panelSet(panel, _viewId, actionPanel));
		}
	};

	return _;
};

export const useGoBack: () => _UseGoBack = () => {
	const [panel, setPanel] = useRecoilState(app_panel);
	const [history, setHistory] = useRecoilState(app_view_history);
	const activeView = useRecoilValue(app_view);
	const viewId = getViewIdFromName(activeView);

	// const [modal, setModal] = useRecoilState(router_modal);
	// const [popout, setPopout] = useRecoilState(router_popout);

	const _: _UseGoBack = (__viewId = -1) => {
		const _viewId = __viewId >= 0 ? __viewId : viewId;

		// if (popout) {
		// 	return setPopout(undefined);
		// }

		// if (modal) {
		// 	return setModal(undefined);
		// }

		if (history[_viewId].length === 1) {
		} else {
			setHistory(historyPop(history, _viewId));
			setPanel(panelSet(panel, _viewId, history[_viewId][history[_viewId].length - 2]));
		}
	};

	return _;
};

export const useSetPopout: () => _UseSetPopout = () => {
	const setPopout = useSetRecoilState(popout_element);
	const _: _UseSetPopout = Popout => setPopout(Popout);
	return _;
};

export const useSetModal: () => _UseSetModal = () => {
	const setModal = useSetRecoilState(app_modal_id);
	const _: _UseSetModal = modal_id => setModal(modal_id);

	return _;
};

export const useCloseModal: () => _UseCloseModal = () => {
	const [modal, setModal] = useRecoilState(app_modal_id);

	const closeModal = () => {
		const Popout = document.getElementById('ModalWrapper');
		const Popout_Window = modal && document.getElementById(modal);

		if (Popout && Popout_Window) {
			Popout.style.backgroundColor = 'rgba(0, 0, 0, 0)';
			Popout_Window.style.transform = 'translateY(100%)';
		}

		setTimeout(() => setModal(undefined), 150);
	};

	const _: _UseCloseModal = () => closeModal();

	return _;
};

export const useSetTabbarShow: () => _UseSetTabbarShow = () => {
	const setTabarShow = useSetRecoilState(app_tabbar_show);

	const _: _UseSetTabbarShow = value => {
		const TabbarWrapper = document.getElementById('TabbarWrapper');

		if (TabbarWrapper) {
			if (!value) {
				TabbarWrapper.style.transform = 'translateY(100%)';
			}
		}

		value ? setTabarShow(true) : setTimeout(() => setTabarShow(false), 200);
	};

	return _;
};
