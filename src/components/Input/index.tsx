import useHaptic from 'hooks/useHaptic';
import { useState } from 'react';
import { BsExclamation } from 'react-icons/bs';
import { FaCheck, FaRegCopy, FaXmark } from 'react-icons/fa6';
import './index.css';

type Props = {
	id?: string;
	value?: string;
	setValue?: (value: string) => any;
	placeholder?: string;
	disabled?: boolean;
	copy?: boolean;
	clear?: boolean;
	valid?: boolean;
	error?: string;
	type?: string;
	inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
};

const Input = ({
	id,
	placeholder,
	disabled,
	value,
	setValue,
	copy,
	clear,
	valid,
	error,
	type,
	inputMode,
}: Props) => {
	const haptic = useHaptic();
	const [isCopied, setIsCopied] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

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
		<div>
			<div className="InputWrapper">
				<input
					id={id}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					min="0"
					className="InputInput"
					value={value}
					type={type}
					onChange={e => {
						setValue && setValue(e.target.value);
					}}
					inputMode={inputMode}
					placeholder=" "
					disabled={disabled}
					style={{
						backgroundColor: disabled ? 'var(--hint20_color)' : 'var(--bg_color)',
						borderColor: disabled ? 'none' : undefined,
						...validCss,
					}}
				/>

				<div className="InputPlaceholder">{placeholder}</div>

				{(copy || clear) && (
					<div className="Input_ButtonWrapper">
						{clear && !disabled && setValue && value && isFocus && (
							<div
								className="Input_Button"
								onClick={() => {
									haptic.impact.light();
									setValue('');
								}}
							>
								<FaXmark color="var(--accent_color)" size={18} />
							</div>
						)}

						{copy && disabled && value && (
							<div
								className="Input_Button"
								style={{
									opacity: isCopied ? 0.7 : undefined,
								}}
								onClick={() => {
									haptic.impact.light();
									navigator.clipboard.writeText(`${value}`);
									setIsCopied(true);
									setTimeout(() => {
										setIsCopied(false);
									}, 1000);
								}}
							>
								{isCopied ? (
									<FaCheck color="var(--accent_color)" size={18} />
								) : (
									<FaRegCopy color="var(--accent_color)" size={18} />
								)}
							</div>
						)}
					</div>
				)}
			</div>
			{error && (
				<div className="Input_Error">
					<div className="Input_Error_Icon">
						<BsExclamation size={24} color="white" />
					</div>
					<div className="Input_Error_Text">{error}</div>
				</div>
			)}
		</div>
	);
};

export default Input;
