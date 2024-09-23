import { FaCheck } from 'react-icons/fa6';
import './index.css';

type Props = {
	isChecked?: boolean;
	isSquare?: boolean;
};

const Radio = ({ isChecked, isSquare }: Props) => {
	return (
		<div
			className="Radio"
			style={{
				borderColor: isChecked ? 'var(--accent_color)' : 'var(--hint_color)',
				borderRadius: isSquare ? 5 : 10,
			}}
		>
			<div
				className="Radio_Content"
				style={{
					backgroundColor: isChecked ? 'var(--accent_color)' : '',
					transform: isChecked ? 'scale(1)' : 'scale(0)',
					borderRadius: isSquare ? 5 : 10,
				}}
			>
				{isChecked && <FaCheck size={10} color="white" />}
			</div>
		</div>
	);
};

export default Radio;
