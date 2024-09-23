import TestModal from 'modals/TestModal';
import Loader from 'panels/Loader';
import Main from 'panels/Main';
import Test from 'panels/Test';
import { FaGamepad, FaHouse, FaKey, FaStar } from 'react-icons/fa6';
import { IRoutes } from './types';

export type AppView = 'main' | '2' | '3' | '4';
export type AppModal = 'test';
export type AppPanel = 'test' | 'main' | 'loader';

const routes: IRoutes = {
	modals: [
		{
			id: 'test',
			modal: TestModal,
		},
	],
	views: [
		{
			id: 'main',
			startPanel: 'loader',
			tabbar: {
				icon: FaHouse,
				iconSize: 36,
			},
			panels: [
				{ id: 'loader', panel: Loader },
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
