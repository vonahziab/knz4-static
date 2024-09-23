import getWebApp from 'functions/TG/getWebApp';
import { useEffect } from 'react';
import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal = ({ router, id }: ModalProps) => {
	useEffect(() => {
		getWebApp().disableVerticalSwipes();
		return () => getWebApp().enableVerticalSwipes();
	}, []);

	return (
		<Modal id={id} router={router} header={'Test'}>
			<div
				id="TestModal_body"
				className="TestModal_body"
				style={{
					display: 'inline-block',
					padding: 16,
					width: '100%',
					boxSizing: 'border-box',
					overflow: 'hidden',
				}}
			>
				Hello modal :) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
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

export default TestModal;
