import usePlatform from 'hooks/usePlatform';
import useSafeInsets from 'hooks/useSafeInsets';
import { HTMLAttributes, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	id: string;
	showAnimation?: boolean;
}

const Content = ({ showAnimation, style, children, id }: Props) => {
	const { bottom } = useSafeInsets();
	const { platform } = usePlatform();

	const [show, setShow] = useState(false);

	// * Tg
	useEffect(() => {
		if (platform !== 'tg') return;

		const Modal_Content = document.getElementById(`${id}_Content`);
		const Modal = document.getElementById(id);

		const isScrollable =
			!!Modal_Content && Modal_Content.scrollHeight > Modal_Content.clientHeight;

		if (Modal) {
			if (isScrollable) {
				Modal.style.borderRadius = '0';
			} else {
				Modal.style.borderRadius = '16px 16px 0 0';
			}
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 200);
	}, []);

	return (
		<div
			id={`${id}_Content`}
			style={{
				maxHeight:
					platform === 'tg'
						? `calc(100vh - 56px - 32px - ${bottom})`
						: `calc(100dvh - 56px - 32px - ${bottom})`,
				overflow: 'hidden scroll',
				display: 'flex',
				flexDirection: 'column',
				transition: 'var(--transition_show_content)',
				opacity: show || !showAnimation ? 1 : 0,
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
