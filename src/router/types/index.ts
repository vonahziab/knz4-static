import { IconType } from 'react-icons';
import { AppModal, AppPanel, AppView } from 'router/routes';

export type PanelProps = { id: AppPanel; viewId: number; router: IRouter };
export type ModalProps = { id: AppModal; router: IRouter };

// * Хуки роутера
export type _UseSetView = (actionView: AppView) => void;
export type _UseGoForward = (panel_id: AppPanel, __viewId?: number) => void;
export type _UseSetPanel = (panel_id: AppPanel, __viewId?: number) => void;
export type _UseGoBack = (__viewId?: number) => void;
export type _UseSetPopout = (Popout?: JSX.Element) => void;
export type _UseSetModal = (modal_id?: AppModal) => void;
export type _UseSetTabbarShow = (value: boolean) => void;
export type _UseCloseModal = () => void;

export interface IRoutes {
	startView: AppView,
	modals: {
		id: AppModal;
		modal: (props: ModalProps) => JSX.Element;
	}[];
	views: {
		id: AppView;
		startPanel: AppPanel;
		tabbar?: {
			icon: IconType;
			iconSize?: number;
			text?: string;
		};
		panels: { id: AppPanel; panel: (props: PanelProps) => JSX.Element }[];
	}[];
}

// * Тип объекта возвращаемого из хука useRouter()
export interface IRouter {
	goForward: _UseGoForward;
	goBack: _UseGoBack;
	setView: _UseSetView;
	setPanel: _UseSetPanel;
	setPopout: _UseSetPopout;
	setModal: _UseSetModal;
	closeModal: _UseCloseModal;
	setTabbarShow: _UseSetTabbarShow;
	data: {
		activeView: AppView;
		history: AppPanel[][];
		activePanel: AppPanel[];
		tabbarShow: boolean;
		modal_id?: AppModal;
		modal_swipe_enabled: boolean;
		popout: JSX.Element;
	};
}
