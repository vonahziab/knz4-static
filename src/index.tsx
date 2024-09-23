import App from 'App';
import eruda from 'eruda';
import { createRoot } from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import { RecoilRoot } from 'recoil';
import 'styles/index.css';

process.env.NODE_ENV === 'development' && eruda.init();
const app = document.getElementById('app');
const root = createRoot(app as HTMLElement);

process.env.NODE_ENV !== 'development' &&
	document.addEventListener('contextmenu', e => e.preventDefault());

root.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>
);
