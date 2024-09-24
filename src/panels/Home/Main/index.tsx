import 'i18n/config';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { FaXmark } from 'react-icons/fa6';
import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Main = ({ id, router }: PanelProps) => {
	const { t } = useTranslation();
	return (
		<Panel id={id} router={router} style={{ gap: 16 }}>
			<h1>Home</h1>
			<button onClick={() => router.goForward('test')}>Go to Test Panel</button>
			<button onClick={() => router.setTabbarShow(!router.data.tabbarShow)}>
				Toggle Tabbar
			</button>
			<button
				onClick={() => {
					router.setModal('test');
				}}
			>
				Go to Test Modal
			</button>

			<button
				onClick={() => {
					router.setPopout(
						<div
							style={{
								backgroundColor: 'var(--bg_color_2)',
								height: 100,
								width: 100,
								padding: 16,
								borderRadius: 32,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<FaXmark color="var(--primary_color)" size={48} />
						</div>
					);
				}}
			>
				Set Popout
			</button>

			<div style={{ textAlign: 'center' }}>{t('home_main.change_language')}</div>
			<div style={{ display: 'flex', gap: 8 }}>
				<button style={{ width: '100%' }} onClick={() => i18next.changeLanguage('en')}>
					EN
				</button>
				<button style={{ width: '100%' }} onClick={() => i18next.changeLanguage('ru')}>
					RU
				</button>
			</div>
		</Panel>
	);
};

export default Main;
