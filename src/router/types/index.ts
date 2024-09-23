import { IconType } from 'react-icons';

export type PanelProps = { id: AppPanel; viewId: number; router: IRouter };
export type ModalProps = { id: AppModal; router: IRouter };
export type AppTheme = 'light' | 'dark';

// * Хуки роутера
export type _UseSetView = (actionView: AppView) => void;
export type _UseGoForward = (panel_id: AppPanel, __viewId?: number) => void;
export type _UseGoBack = (__viewId?: number) => void;
export type _UseSetTheme = (theme: 'light' | 'dark') => void;
export type _UseSetPopout = (Popout?: JSX.Element) => void;
export type _UseSetModal = (modal_id?: AppModal) => void;
export type _UseSetTabbarShow = (value: boolean) => void;
export type _UseCloseModal = () => void;

export interface IRoutes {
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
	setTheme: _UseSetTheme;
	setPopout: _UseSetPopout;
	setModal: _UseSetModal;
	closeModal: _UseCloseModal;
	setTabbarShow: _UseSetTabbarShow;
	data: {
		theme: AppTheme;
		activeView: AppView;
		history: AppPanel[][];
		activePanel: AppPanel[];
		tabbarShow: boolean;
		modal_id?: AppModal;
		modal_swipe_enabled: boolean;
		popout: JSX.Element;
	};
}

export type AppView = 'main' | '2' | '3' | '4';
export type AppModal = 'test';

export type AppPanel = 'test' | 'main';
