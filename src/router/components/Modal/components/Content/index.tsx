import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	showAnimation?: boolean;
}

const Content = ({ showAnimation, style, children }: Props) => {
	const { bottom } = useSafeInsets();

	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 200);
	}, []);

	return (
		<div
			style={{
				transition: 'var(--transition_show_content)',
				padding: 16,
				overflowX: 'hidden',
				display: 'flex',
				flexDirection: 'column',
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
