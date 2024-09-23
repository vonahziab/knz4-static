import { FaAngleDown } from 'react-icons/fa6';
import './index.css';
type Props = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	options: {
		value: string;
		name: string;
	}[];
	disabled?: boolean;
};

const Select = ({ value, setValue, options, disabled }: Props) => {
	return (
		<div className="SelectWrapper">
			<select
				name="select"
				className="Select"
				value={value}
				onChange={e => {
					setValue(e.target.value);
					e.target.blur();
				}}
				disabled={disabled}
			>
				{options.map((item, index) => (
					<option key={index} value={item.value}>
						{item.name}
					</option>
				))}
			</select>

			<div className="SelectArrowDown">
				<FaAngleDown
					size={24}
					color={!disabled ? 'var(--blue_color)' : 'var(--hint_color)'}
				/>
			</div>
		</div>
	);
};

export default Select;
