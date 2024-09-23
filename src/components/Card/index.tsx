import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {}

const Card = ({ children, style, onClick, className, onTouchStart, onTouchEnd }: Props) => {
	return (
		<div
			className={className}
			onClick={onClick}
			style={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'var(--bg_color)',
				borderRadius: 8,
				padding: 16,
				boxSizing: 'border-box',
				...style,
			}}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			{children}
		</div>
	);
};

export default Card;
