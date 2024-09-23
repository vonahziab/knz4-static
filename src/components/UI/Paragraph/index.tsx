import { HTMLAttributes } from 'react';
import './index.css';
interface Props extends HTMLAttributes<HTMLElement> {}

const Paragraph = ({ children, style }: Props) => {
	return (
		<div className="Paragraph" style={style}>
			<div className="Paragraph_Line" />
			<div className="Paragraph_Content">{children}</div>
		</div>
	);
};

export default Paragraph;
