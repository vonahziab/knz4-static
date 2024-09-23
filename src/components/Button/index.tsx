import { HTMLAttributes } from 'react';
import './index.css';
interface Props extends HTMLAttributes<HTMLElement> {
	disabled?: boolean;
	loading?: boolean;
	stretch?: boolean;
	showChildrenOnLoading?: boolean;
	backgroundColor?: string;
}

const Button = ({ id, backgroundColor = 'white', color = 'black', ...props }: Props) => {
	const ots = (e: React.TouchEvent<HTMLButtonElement>) => {
		props.onTouchStart && props.onTouchStart(e);
		const target = e.currentTarget;
		target.style.transform = 'scale(0.98)';
	};

	const ote = (e: React.TouchEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.transform = 'scale(1)';
		}, 200);
	};

	const oc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, fn: Function) => {
		e.stopPropagation();
		e.preventDefault();
		const target = e.currentTarget;
		target.style.transform = 'scale(0.98)';

		setTimeout(() => {
			target.style.transform = 'scale(1)';
		}, 200);

		setTimeout(() => {
			fn(e);
		}, 200);
	};

	return (
		<button
			id={id}
			className={
				`ARMUI_Button` +
				(props.className ? ` ${props.className}` : '') +
				(props.disabled || props.loading ? ` ARMUI_Button-disabled` : '')
			}
			onTouchStart={e => !(props.loading || props.disabled) && ots(e)}
			onTouchEnd={e => !(props.loading || props.disabled) && ote(e)}
			onClick={e => {
				const onClick = props.onClick;
				if (onClick) {
					!(props.loading || props.disabled) && oc(e, onClick);
				}
			}}
			style={{
				backgroundColor: backgroundColor,
				color: color,
				width: props.stretch ? '100%' : undefined,
				cursor: props.disabled || props.loading ? 'unset' : 'pointer',
				...props.style,
			}}
		>
			{props.loading && <div className={`ARMUI_Button_spinner`} />}

			{props.showChildrenOnLoading ? (
				<div
					style={{
						// display: 'flex',
						width: '100%',
						opacity: props.loading || props.disabled ? 0.7 : undefined,
					}}
				>
					{props.children}
				</div>
			) : (
				!props.loading && (
					<div
						style={{
							// display: 'flex',
							width: '100%',
							opacity: props.loading || props.disabled ? 0.7 : undefined,
						}}
					>
						{props.children}
					</div>
				)
			)}
		</button>
	);
};

export default Button;
