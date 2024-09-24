import routes, { AppModal, AppPanel, AppView } from '../routes';

export const historyClear = (history: AppPanel[][], startPanel: AppPanel, viewId: number) => {
	let _history: AppPanel[][] = Object.assign([], history);
	let __history: AppPanel[] = Object.assign([], _history[viewId]);
	__history = [startPanel];
	_history[viewId] = __history;
	return _history;
};

export const panelClear = (panel: AppPanel[], startPanel: AppPanel, viewId: number) => {
	let _panel: AppPanel[] = Object.assign([], panel);
	_panel[viewId] = startPanel;
	return _panel;
};

export const historyPush = (history: AppPanel[][], viewId: number, actionPanel: AppPanel) => {
	let _history: AppPanel[][] = Object.assign([], history);
	let __history: AppPanel[] = Object.assign([], _history[viewId]);
	__history.push(actionPanel);
	_history[viewId] = __history;
	return _history;
};

export const panelSet = (panel: AppPanel[], viewId: number, actionPanel: AppPanel) => {
	let _panel: AppPanel[] = Object.assign([], panel);
	_panel[viewId] = actionPanel;
	return _panel;
};

export const historyPop = (history: AppPanel[][], viewId: number) => {
	let _history: AppPanel[][] = Object.assign([], history);
	let __history: AppPanel[] = Object.assign([], _history[viewId]);
	__history.pop();
	_history[viewId] = __history;
	return _history;
};

export const getViewIdFromName = (view: AppView) =>
	routes.views.findIndex((item: any) => item.id === view);

export const modalHistoryPush = (history: AppModal[], actionModal: AppModal) => {
	let _history: AppModal[] = Object.assign([], history);
	_history.push(actionModal);
	return _history;
};

export const modalHistoryPop = (history: AppModal[]) => {
	let _history: AppModal[] = Object.assign([], history);
	_history.pop();
	return _history;
};
