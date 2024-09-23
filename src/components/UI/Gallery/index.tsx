import { HTMLAttributes } from 'react';
import './index.css';
interface Props extends HTMLAttributes<HTMLElement> {}

const Gallery = ({ children, style }: Props) => {
	return (
		<div
			className="Gallery"
			style={{
				display: 'flex',
				gap: 8,
				overflowX: 'scroll',
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Gallery;
