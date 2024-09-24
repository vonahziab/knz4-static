import usePlatform from 'hooks/usePlatform';
import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	id: string;
	showAnimation?: boolean;
}

const Content = ({ style, children, id, showAnimation }: Props) => {
	const { bottom } = useSafeInsets();
	const { platform } = usePlatform();

	useEffect(() => {
		const Content = document.getElementById(`${id}_Modal_Content`);
		if (Content && showAnimation) {
			setTimeout(() => {
				Content.style.opacity = '1';
			}, 200); // Пока поднимется
		}
	}, []);

	return (
		<div
			id={`${id}_Modal_Content`}
			style={{
				maxHeight:
					platform === 'web'
						? `calc(100dvh - 56px - 32px - ${bottom} - 8px)`
						: `calc(100vh - 56px - 32px - ${bottom}) - 8px`,
				overflow: 'hidden scroll',
				display: 'flex',
				flexDirection: 'column',
				transition: 'var(--modal_content_transition)',
				opacity: showAnimation ? 0 : 1,
				padding: 16,
				paddingBottom: `calc(${bottom} + 16px)`,
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Content;
