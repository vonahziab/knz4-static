import useSafeInsets from 'hooks/useSafeInsets';

type Props = {};

const TestPanel = (props: Props) => {
	const { bottom } = useSafeInsets();

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				position: 'absolute',
				bottom: '0',
				right: '0',
				top: '0',
				left: '0',
				overflow: 'scroll',
				backgroundColor: 'var(--bg_color)',
				color: 'var(--text_color)',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 16,
					paddingBottom: `calc(${bottom} + 16px + 64px)`,
				}}
			>
				{new Array(10).fill(true).map((i, index) => {
					return (
						<div
							key={index}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: 100,
								width: '100%',
								backgroundColor: 'var(--bg_color_2)',
								border: '1px solid var(--bg_color_3)',
								marginBottom: index !== 9 ? 16 : undefined,
								borderRadius: 32,
								textAlign: 'center',
							}}
						>
							{index + 1}. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Culpa, labore, odio veniam maiores fugiat repudiandae placeat sed
							cupiditate cum quos id animi laboriosam?
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TestPanel;
