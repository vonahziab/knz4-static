import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal2 = ({ router, id }: ModalProps) => {
	return (
		<Modal
			id={id}
			router={router}
			header={'Test'}
			style={{
				gap: 16,
			}}
		>
			<button onClick={() => router.goBack()} style={{ width: '100%' }}>
				Back
			</button>
			<div>
				Quibusdamab eaque necessitatibus tempora hic eveniet adipisci veritatis nulla ullam.
				Consequuntur architecto velit ab eum rerum, autem dicta eveniet. Dignissimos,
				consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				iure iste qui aspernatur culpa quisquam consequuntur corrupti id ea nemo deleniti
				obcaecati quo mollitia consectetur, fuga officia nam. Molestiae, sint. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Fugiat voluptate impedit soluta
				molestias harum iure eos, architecto velit facere rerum quasi ratione, repudiandae
				earum at illum odio quibusdam aut aliquid. Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Consectetur distinctio ratione mollitia inventore dolore neque
				sint natus, sed tempore molestiae quidem perferendis sequi atque fuga? Dicta rerum
				optio accusantium impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ratione consectetur, animi ipsam pariatur aperiam ad nam. Cumque, natus eum maxime
				quia praesentium quas quisquam, corrupti debitis numquam, quaerat odit ullam?Lorem
				ipsum dolor, sit amet consectetur adipisicing elit. Cumque sed eligendi quos nam
				ducimus dolores vel rerum. Ullam animi excepturi possimus saepe quo harum omnis ad,
				repudiandae enim, delectus asperiores. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Eum ullam, quidem odit perspiciatis est corporis voluptatum animi,
				sint eos velit dolore quis iusto libero. Veritatis ut id repudiandae ipsam sit.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium
				consequuntur maiores? Porro fuga nemo iste ratione obcaecati voluptatum veritatis
				quasi sed! Cum, nesciunt libero minus asperiores fuga facilis placeat? Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Ducimus itaque non nobis deleniti sit
				qui fugit hic odio, aperiam magni nesciunt a. Culpa ex ipsum deserunt omnis nam
				beatae ea?
			</div>
		</Modal>
	);
};

export default TestModal2;
