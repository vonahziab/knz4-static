import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal = ({ router, id }: ModalProps) => {
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
				Hello modal :)
			</div>
		</Modal>
	);
};

export default TestModal;
