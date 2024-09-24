import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal = ({ router, id }: ModalProps) => {
	return (
		<Modal
			id={id}
			router={router}
			header={'Test'}
			style={{
				gap: 16,
			}}
		>
			<button style={{ width: '100%' }} onClick={() => router.setModal('test2')}>
				Go to Test Modal 2
			</button>
			<button style={{ width: '100%' }} onClick={() => router.goBack()}>
				Back
			</button>
			<div>Hello modal :) Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
		</Modal>
	);
};

export default TestModal;
