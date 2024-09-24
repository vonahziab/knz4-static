import useSafeInsets from 'hooks/useSafeInsets';
import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal2 = ({ router, id }: ModalProps) => {
	const { bottom } = useSafeInsets();

	return (
		<Modal id={id} router={router} header={'Test'}>
			<div
				id="TestModal_body"
				className="TestModal_body"
				style={{
					display: 'inline-block',
					padding: 16,
					paddingBottom: `calc(${bottom} + 16px)`,
					width: '100%',
					boxSizing: 'border-box',
					overflow: 'hidden',
				}}
			>
				Modal 2<button onClick={() => router.goBack()}>Back Go</button>
				ab eaque necessitatibus tempora hic eveniet adipisci veritatis nulla ullam.
				Consequuntur architecto velit ab eum rerum, autem dicta eveniet. Dignissimos,
				consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				iure iste qui aspernatur culpa quisquam consequuntur corrupti id ea nemo deleniti
				obcaecati quo mollitia consectetur, fuga officia nam. Molestiae, sint. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Fugiat voluptate impedit soluta
				molestias harum iure eos, architecto velit facere rerum quasi ratione, repudiandae
				earum at illum odio quibusdam aut aliquid.
			</div>
		</Modal>
	);
};

export default TestModal2;
