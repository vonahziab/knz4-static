import App from 'App';
import { createRoot } from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { RecoilRoot } from 'recoil';
import 'styles/index.css';

// process.env.NODE_ENV === 'development' && eruda.init();
const app = document.getElementById('app');
const root = createRoot(app as HTMLElement);

process.env.NODE_ENV !== 'development' &&
	document.addEventListener('contextmenu', e => e.preventDefault());

root.render(
	// <LanguageProvider
	// 	defaultValue={{
	// 		title: 'string',
	// 		description: 'string',
	// 		value: 'string',
	// 		words: {
	// 			one: 'one',
	// 		},
	// 	}}
	// >
	<RecoilRoot>
		<SkeletonTheme
			baseColor="var(--skeleton_base_color)"
			highlightColor="var(--skeleton_highlight_color)"
		>
			<App />
		</SkeletonTheme>
	</RecoilRoot>
	// </LanguageProvider>
);
