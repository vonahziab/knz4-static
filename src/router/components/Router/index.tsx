import routes from 'router/routes';
import { IRouter } from 'router/types';
import ModalRoot from '../ModalRoot';
import Root from '../Root';
import Tabbar from '../Tabbar';
import View from '../View';

const Router = ({ router }: { router: IRouter }) => {
	return (
		<>
			{router.data.popout}

			<ModalRoot selectedModal={router.data.modal_id} router={router}>
				{routes.modals.map((modal, index) => {
					const Component = modal.modal;
					return <Component key={index} id={modal.id} router={router} />;
				})}
			</ModalRoot>

			<Root selectedView={router.data.activeView}>
				{routes.views.map((view, index) => (
					<View
						key={index}
						vieweId={index}
						id={view.id}
						selectedPanel={router.data.activePanel[index]}
						router={router}
					>
						{view.panels.map((panel, index2) => {
							const Component = panel.panel;
							return (
								<Component
									key={index2}
									id={panel.id}
									viewId={index}
									router={router}
								/>
							);
						})}
					</View>
				))}
			</Root>

			<Tabbar router={router} />
		</>
	);
};

export default Router;
