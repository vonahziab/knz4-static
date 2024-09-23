import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	lineHeight?: React.CSSProperties['lineHeight'];
	fontSize?: React.CSSProperties['fontSize'];
	fontWeight?: React.CSSProperties['fontWeight'];
	color?: React.CSSProperties['color'];
}

const BlockText = ({
	id,
	children,
	lineHeight,
	fontSize,
	fontWeight,
	color,
	style,
	onClick,
}: Props) => {
	return (
		<div
			id={id}
			style={{
				lineHeight,
				fontSize,
				fontWeight,
				color,
				...style,
			}}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default BlockText;
