import { HTMLAttributes } from 'react';
import './index.css';

interface Props extends HTMLAttributes<HTMLElement> {
	isActive?: boolean;
	loading?: boolean;
	disabled?: boolean;
}

const Switch = ({
	className,
	style,
	isActive = false,
	onClick,
	loading = false,
	disabled = typeof onClick === 'undefined',
}: Props) => {
	return (
		<div className={`ARMUI_Switch` + (className ? ` ${className}` : '')} style={style}>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<div className={`ARMUI_Switch_spinner`} />
				</div>
			) : (
				<div
					className="ARMUI_Switch_Content"
					style={{
						opacity: disabled ? 0.6 : 1,
						cursor: disabled ? 'not-allowed' : 'pointer',
					}}
					onClick={e => {
						!disabled && onClick && onClick(e);
					}}
				>
					<div
						className={`ARMUI_Switch_Background ${
							isActive ? 'ARMUI_Switch_Background-active' : ''
						}`}
					/>
					<div
						className={`ARMUI_Switch_Circle ${
							isActive ? 'ARMUI_Switch_Circle-active' : ''
						}`}
					/>
				</div>
			)}
		</div>
	);
};

export default Switch;
