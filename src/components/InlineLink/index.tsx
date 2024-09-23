import './index.css';
interface Props {
	href?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	text: string;
	style?: React.CSSProperties;
}

const InlineLink = ({ href, text, onClick, style }: Props) => {
	return (
		<a
			onClick={onClick}
			target="_blank"
			rel="noreferrer"
			href={href}
			className="InlineLink"
			style={{
				display: 'inline',
				...style,
			}}
		>
			{text}
		</a>
	);
};

export default InlineLink;
