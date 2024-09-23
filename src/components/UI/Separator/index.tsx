import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {}

const Separator = ({ color, style }: Props) => {
	return (
		<hr
			style={{
				height: '1px',
				width: '100%',
				border: 'none',
				backgroundColor: color || 'var(--hint20_color)',
				color: color || 'var(--hint20_color)',
				...style,
			}}
		/>
	);
};

export default Separator;
