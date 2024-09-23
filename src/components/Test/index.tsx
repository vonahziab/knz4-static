import useSafeInsets from 'hooks/useSafeInsets';

type Props = {};

const TestPanel = (props: Props) => {
	const { bottom } = useSafeInsets();

	return (
		<div
			style={{
				height: '100%',
				overflow: 'scroll',
				position: 'absolute',
				bottom: '0',
				right: '0',
				top: '0',
				left: '0',
				backgroundColor: 'var(--bg_color)',
				color: 'var(--text_color)',
				boxSizing: 'border-box',
				padding: '16px 16px 0px',
				paddingBottom: `calc(${bottom} + 16px)`,
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					paddingBottom: 64,
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
