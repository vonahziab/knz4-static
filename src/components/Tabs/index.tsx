import BlockText from 'components/BlockText';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

interface ITabs extends HTMLAttributes<HTMLDivElement> {
	handleClick?: (item: string) => void;
	tab: string;
	setTab: SetterOrUpdater<string>;
	tabs: {
		label: string;
		value: string;
	}[];
}

const Tabs: FC<ITabs> = ({ tab, setTab, tabs, handleClick }) => {
	const [isFirst, setIsFirst] = useState(true);
	useEffect(() => {
		const hiddenElement = document.getElementById(`tab_id_${tab}`);
		if (hiddenElement) {
			setIsFirst(false);
			hiddenElement.scrollIntoView({
				inline: 'center',
				block: 'center',
				behavior: isFirst ? 'auto' : 'smooth',
			});
		}
	}, [tab]);

	return (
		<div style={{ overflow: 'auto', display: 'flex', padding: '0 16px', gap: 16 }}>
			{tabs.map((item, index) => {
				return (
					<div
						id={`tab_id_${item.value}`}
						style={{
							display: 'flex',
							alignItems: 'center',
							height: 44,
							width: '100%',
						}}
						key={index}
					>
						<div
							onClick={() => {
								setTab(item.value);
								handleClick && handleClick(item.value);
							}}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								transition: 'all .4s ease',
								zIndex: 1,
								width: '100%',
								whiteSpace: 'nowrap',
							}}
						>
							<BlockText
								lineHeight="21px"
								fontSize={16}
								fontWeight={700}
								color={tab !== item.value ? 'var(--hint_color)' : undefined}
							>
								{item.label}
							</BlockText>

							<div
								style={{
									paddingTop: 5,
									height: 7,
									width: '100%',
								}}
							>
								<div
									style={{
										height: 2,
										width: '100%',
										borderRadius: 3.5,
										transition: 'all 0.2s ease',
										backgroundColor:
											tab === item.value ? 'var(--accent_color)' : undefined,
									}}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Tabs;
