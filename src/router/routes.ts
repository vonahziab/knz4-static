import Main from 'panels/Main';
import Test from 'panels/Test';
import { FaGamepad, FaHouse, FaKey, FaStar } from 'react-icons/fa6';
import { IRoutes } from './types';

export type AppView = 'main' | '2' | '3' | '4';
export type AppModal = 'test';
export type AppPanel = 'test' | 'main';

const routes: IRoutes = {
	modals: [],
	views: [
		{
			id: 'main',
			startPanel: 'main',
			tabbar: {
				icon: FaHouse,
				iconSize: 36,
			},
			panels: [
				{ id: 'main', panel: Main },
				{ id: 'test', panel: Test },
			],
		},
		{
			id: '2',
			startPanel: 'main',
			tabbar: {
				icon: FaKey,
				iconSize: 32,
			},
			panels: [
				{ id: 'main', panel: Main },
				{ id: 'test', panel: Test },
			],
		},
		{
			id: '3',
			startPanel: 'main',
			tabbar: {
				icon: FaGamepad,
				iconSize: 40,
			},
			panels: [
				{ id: 'main', panel: Main },
				{ id: 'test', panel: Test },
			],
		},
		{
			id: '4',
			startPanel: 'main',
			tabbar: {
				icon: FaStar,
				iconSize: 36,
			},
			panels: [
				{ id: 'main', panel: Main },
				{ id: 'test', panel: Test },
			],
		},
	],
};

export default routes;
