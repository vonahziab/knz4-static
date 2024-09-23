import Card from 'components/UI/Card';
import { HTMLAttributes, ReactElement } from 'react';
import './index.css';
interface Props extends HTMLAttributes<HTMLElement> {
	text: string;
	icon: ReactElement<any, any>;
}

const CardButton = ({ text, onClick, onTouchStart, icon, style }: Props) => {
	const ots = (e: any) => {
		onTouchStart && onTouchStart(e);
		const target = e.currentTarget;
		target.style.transform = 'scale(0.98)';
	};

	const ote = (e: any) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.transform = 'scale(1)';
		}, 200);
	};

	const oc = (e: any, fn: Function) => {
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
		<Card
			style={{
				display: 'flex',
				padding: 12,
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: 96.5,
				gap: 6,
				cursor: 'pointer',
				...style,
			}}
			className="CardButton"
			onTouchStart={e => e && ots(e)}
			onTouchEnd={e => e && ote(e)}
			onClick={e => {
				if (onClick) {
					oc(e, onClick);
				}
			}}
		>
			<div>{icon}</div>
			<div
				style={{
					color: 'var(--hint_color)',
					textAlign: 'center',
					wordBreak: 'break-word',
					hyphens: 'auto',
					fontSize: '15px',
				}}
			>
				{text}
			</div>
		</Card>
	);
};

export default CardButton;
