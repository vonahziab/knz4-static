import { FaCheck } from 'react-icons/fa6';
import './index.css';

type Props = {
	isChecked?: boolean;
};

const Checkbox = ({ isChecked }: Props) => {
	return (
		<div
			className="Checkbox"
			style={{
				borderColor: isChecked ? 'var(--accent_color)' : 'var(--hint50_color)',
			}}
		>
			<div
				className="Checkbox_Content"
				style={{
					backgroundColor: isChecked ? 'var(--accent_color)' : '',
					transform: isChecked ? 'scale(1)' : 'scale(0)',
				}}
			>
				{isChecked && <FaCheck size={18} color="white" />}
			</div>
		</div>
	);
};

export default Checkbox;
