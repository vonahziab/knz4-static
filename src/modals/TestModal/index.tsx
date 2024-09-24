import useSafeInsets from 'hooks/useSafeInsets';
import Modal from 'router/components/Modal';
import { ModalProps } from 'router/types';
import './index.css';

const TestModal = ({ router, id }: ModalProps) => {
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
				<button onClick={() => router.setModal('test2')}>Go to Test Modal 2</button>
				<button onClick={() => router.goBack()}>Back Go</button>
				Hello modal :) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
				
			</div>
		</Modal>
	);
};

export default TestModal;
