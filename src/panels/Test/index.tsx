import { Panel } from 'router';
import { PanelProps } from 'router/types';

const Test = ({ id, router }: PanelProps) => {
	return (
		<Panel id={id} router={router}>
			<button onClick={() => router.goBack()}>Назад</button>
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
							boxSizing: 'border-box',
						}}
					>
						{index + 1}. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Culpa, labore, odio veniam maiores fugiat repudiandae placeat sed cupiditate
						cum quos id animi laboriosam?
					</div>
				);
			})}
		</Panel>
	);
};

export default Test;
