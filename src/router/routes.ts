import TestModal from 'modals/TestModal';
import GameplayMain from 'panels/Gameplay/Main';
import HomeMain from 'panels/Home/Main';
import IncomeMain from 'panels/Income/Main';
import SplashScreen from 'panels/PrePage/SplashScreen';
import Test from 'panels/Single/Test';
import TopMain from 'panels/Top/Main';
import { FaGamepad, FaHouse, FaKey, FaStar } from 'react-icons/fa6';
import { IRoutes } from './types';

export type AppView = 'home' | 'income' | 'gameplay' | 'top';
export type AppPanel =
	| AppPanelPrePage
	| AppPanelHome
	| AppPanelIncome
	| AppPanelTop
	| AppPanelGameplay
	| AppPanelSingle;

export type AppModal = 'test';

type AppPanelPrePage = 'splash_screen';
type AppPanelSingle = 'test';
type AppPanelHome = 'home_main';
type AppPanelIncome = 'income_main';
type AppPanelGameplay = 'gameplay_main';
type AppPanelTop = 'top_main';

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
			startPanel: 'splash_screen',
			tabbar: {
				icon: FaHouse,
				iconSize: 24 + 8,
			},
			panels: [
				{ id: 'splash_screen', panel: SplashScreen },
				{ id: 'home_main', panel: HomeMain },
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
