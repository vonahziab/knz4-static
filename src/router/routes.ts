import TestModal from 'modals/TestModal';
import Loader from 'panels/Before/Loader';
import GameplayMain from 'panels/Gameplay/Main';
import HomeMain from 'panels/Home/Main';
import IncomeMain from 'panels/Income/Main';
import Test from 'panels/Other/Test';
import TopMain from 'panels/Top/Main';
import { FaGamepad, FaHouse, FaKey, FaStar } from 'react-icons/fa6';
import { IRoutes } from './types';

export type AppView = 'home' | 'income' | 'gameplay' | 'top';
export type AppPanel =
	| AppPanelBefore
	| AppPanelHome
	| AppPanelIncome
	| AppPanelGameplay
	| AppPanelTop
	| 'test';

export type AppModal = 'test';

export type AppPanelBefore = 'loader';
export type AppPanelHome = 'home_main';
export type AppPanelIncome = 'income_main';
export type AppPanelGameplay = 'gameplay_main';
export type AppPanelTop = 'top_main';

const routes: IRoutes = {
	startView: 'home',
	modals: [
		{
			id: 'test',
			modal: TestModal,
		},
	],
	views: [
		{
			id: 'home',
			startPanel: 'loader',
			tabbar: {
				icon: FaHouse,
				iconSize: 24 + 8,
			},
			panels: [
				{ id: 'home_main', panel: HomeMain },
				{ id: 'loader', panel: Loader },
				{ id: 'test', panel: Test },
			],
		},
		{
			id: 'income',
			startPanel: 'income_main',
			tabbar: {
				icon: FaKey,
				iconSize: 24 + 4,
			},
			panels: [{ id: 'income_main', panel: IncomeMain }],
		},
		{
			id: 'gameplay',
			startPanel: 'gameplay_main',
			tabbar: {
				icon: FaGamepad,
				iconSize: 24 + 12,
			},
			panels: [{ id: 'gameplay_main', panel: GameplayMain }],
		},
		{
			id: 'top',
			startPanel: 'top_main',
			tabbar: {
				icon: FaStar,
				iconSize: 24 + 8,
			},
			panels: [{ id: 'top_main', panel: TopMain }],
		},
	],
};

export default routes;
