import Test from 'panels/Test';
import { IRoutes } from './types';

import { FaGamepad, FaHouse, FaKey, FaStar } from 'react-icons/fa6';

const routes: IRoutes = {
	modals: [],
	views: [
		{
			id: 'main',
			startPanel: 'test',
			tabbar: {
				icon: FaHouse,
				iconSize: 36,
			},
			panels: [{ id: 'test', panel: Test }],
		},
		{
			id: '2',
			startPanel: 'test',
			tabbar: {
				icon: FaKey,
				iconSize: 32,
			},
			panels: [{ id: 'test', panel: Test }],
		},
		{
			id: '3',
			startPanel: 'test',
			tabbar: {
				icon: FaGamepad,
				iconSize: 40,
			},
			panels: [{ id: 'test', panel: Test }],
		},
		{
			id: '4',
			startPanel: 'test',
			tabbar: {
				icon: FaStar,
				iconSize: 36,
			},
			panels: [{ id: 'test', panel: Test }],
		},
	],
};

export default routes;
