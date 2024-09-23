import getWebApp from 'functions/TG/getWebApp';
import useHaptic from 'hooks/useHaptic';
import { useState } from 'react';
import { BsExclamation } from 'react-icons/bs';
import { FaCheck, FaRegCopy, FaXmark } from 'react-icons/fa6';
import './index.css';

type Props = {
	value?: string;
	setValue?: (value: string) => any;
	placeholder?: string;
	disabled?: boolean;
	copy?: boolean;
	clear?: boolean;
	valid?: boolean;
	error?: string;
};

const NumberInput = ({
	placeholder,
	disabled,
	value,
	setValue,
	copy,
	clear,
	valid,
	error,
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
			<div className="wrp">
				<input
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					min="0"
					className="inp"
					value={value}
					onChange={e => {
						if (setValue) {
							const value = e.target.value.replace(',', '.');
							(Number.isFinite(+value) ||
								value === '' ||
								value === '0' ||
								value === '.') &&
								setValue(value);
						}
					}}
					type="text"
					inputMode="decimal"
					placeholder=" "
					disabled={disabled}
					style={{
						backgroundColor: disabled ? 'var(--hint20_color)' : 'var(--bg_color)',
						borderColor: disabled ? 'none' : undefined,
						...validCss,
					}}
				/>

				<div className="plh">{placeholder}</div>

				{(copy || clear) && (
					<div className="InputNumber_ButtonWrapper">
						{clear && !disabled && setValue && value && isFocus && (
							<div
								className="InputNumber_Button"
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
								className="InputNumber_Button"
								style={{
									opacity: isCopied ? 0.7 : undefined,
								}}
								onClick={() => {
									getWebApp()?.HapticFeedback.impactOccurred('light');
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
				<div className="NumberInput_Error">
					<div className="NumberInput_Error_Icon">
						<BsExclamation size={24} color="white" />
					</div>
					<div className="NumberInput_Error_Text">{error}</div>
				</div>
			)}
		</div>
	);
};

export default NumberInput;
