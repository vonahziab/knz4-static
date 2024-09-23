import { atom } from 'recoil';
import routes, { AppModal, AppPanel, AppView } from 'router/routes';
import { AppTheme } from 'router/types';

export const app_tabbar_show = atom<boolean>({
	key: 'app_tabbar_show',
	default: false,
});

export const app_view = atom<AppView>({
	key: 'app_view',
	default: routes.startView,
});

export const app_view_history = atom<AppPanel[][]>({
	key: 'app_view_history',
	default: routes.views.map(i => [i.startPanel]),
});

export const app_panel = atom<AppPanel[]>({
	key: 'app_panel',
	default: routes.views.map(i => i.startPanel),
});

export const app_theme = atom<AppTheme>({
	key: 'app_theme',
	default: undefined,
});

export const app_modal_id = atom<AppModal | undefined>({
	key: 'app_modal_id',
	default: undefined,
});

export const app_modal_swipe_enabled = atom<boolean>({
	key: 'app_modal_swipe_enabled',
	default: false,
});

export const popout_element = atom<any>({
	key: 'popout_element',
	default: undefined,
});
