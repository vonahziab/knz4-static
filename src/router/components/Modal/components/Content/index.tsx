import usePlatform from 'hooks/usePlatform';
import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	showAnimation?: boolean;
}

const Content = ({ showAnimation, style, children }: Props) => {
	const { bottom } = useSafeInsets();
	const { platform } = usePlatform();

	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 200);
	}, []);

	return (
		<div
			style={{
				maxHeight: `calc(100vh - 56px - ${
					platform === 'tg' ? '16px' : '0px'
				} - 32px - ${bottom})`,
				overflow: 'hidden scroll',
				display: 'flex',
				flexDirection: 'column',
				padding: 16,
				transition: 'var(--transition_show_content)',
				opacity: show || !showAnimation ? 1 : 0,
				paddingBottom: `calc(${bottom} + 16px)`,
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Content;
