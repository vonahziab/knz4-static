import { AppPanel, AppView } from 'router/types';
import routes from '../routes';

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
	// window.history.pushState('loop', 'loop');
	// window.history.pushState( {panel: actionPanel}, viewId );
	let _history: AppPanel[][] = Object.assign([], history);
	let __history: AppPanel[] = Object.assign([], _history[viewId]);
	__history.push(actionPanel);
	_history[viewId] = __history;
	// console.log(_history[0], _history[1]);
	return _history;
};

export const panelSet = (panel: AppPanel[], viewId: number, actionPanel: AppPanel) => {
	let _panel: AppPanel[] = Object.assign([], panel);
	_panel[viewId] = actionPanel;
	// console.log(_panel[0], _panel[1]);
	return _panel;
};

export const historyPop = (history: AppPanel[][], viewId: number) => {
	let _history: AppPanel[][] = Object.assign([], history);
	let __history: AppPanel[] = Object.assign([], _history[viewId]);
	__history.pop();
	_history[viewId] = __history;
	// console.log(_history[0], _history[1]);
	return _history;
};

export const getViewIdFromName = (view: AppView) =>
	routes.views.findIndex((item: any) => item.id === view);
