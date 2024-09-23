import { useLayoutEffect, useRef } from 'react';
import './index.css';

type Props = {
	id?: string;
	value?: string;
	setValue?: (value: string) => any;
	placeholder?: string;
	disabled?: boolean;
	valid?: boolean;
};

const TextArea = ({ id, value, setValue, placeholder, disabled, valid }: Props) => {
	const textbox = useRef<any>(null);

	const adjustHeight = () => {
		if (textbox.current) {
			textbox.current.style.height = 'inherit';
			textbox.current.style.height = `${textbox.current.scrollHeight + 16}px`;
		}
	};

	useLayoutEffect(adjustHeight, [value]);

	const handleKeyDown = () => adjustHeight();

	const validCss =
		valid === true
			? {
					borderColor: 'var(--green)',
			  }
			: valid === false
			? {
					borderColor: 'var(--red)',
			  }
			: {};

	return (
		<div className="TextAreaWrapper">
			<textarea
				id={id}
				className="TextAreaTextarea"
				ref={textbox}
				style={{
					backgroundColor: disabled ? 'var(--hint20_color)' : 'var(--bg_color)',
					borderColor: disabled ? 'none' : undefined,
					...validCss,
				}}
				value={value}
				onChange={e => {
					setValue && setValue(e.target.value);
					handleKeyDown();
				}}
				placeholder=" "
				disabled={disabled}
			/>

			<div className="TextAreaPlaceholder">{placeholder}</div>
		</div>
	);
};

export default TextArea;
