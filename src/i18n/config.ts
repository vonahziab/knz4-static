import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en';
import ru from './lang/ru';

i18next.use(initReactI18next).init({
	lng: 'ru',
	fallbackLng: 'en',
	resources: {
		en,
		ru,
	},
});
