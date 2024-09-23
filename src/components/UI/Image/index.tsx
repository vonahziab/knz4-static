type Props = {
	src: string;
	alt?: string;
	borderRadius?: React.CSSProperties['borderRadius'];
	style?: React.CSSProperties;
};

const Image = ({ src, alt = '', borderRadius = 8, style }: Props) => {
	return (
		<div
			style={{
				borderRadius,
				display: 'block',
				maxWidth: '100%',
				...style,
			}}
		>
			<img
				src={src}
				alt={alt}
				style={{
					borderRadius,
					display: 'block',
					maxWidth: '100%',
					...style,
				}}
			/>
		</div>
	);
};

export default Image;
