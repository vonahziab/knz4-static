import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import './index.css';
type Props = {
	menu: {
		title: string;
		icon: string;
		selectable: boolean;
		onClick: Function;
	}[];
};

const Menu = ({ menu }: Props) => {
	const ots = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		target.style.backgroundColor = 'var(--hint20_color)';
	};

	const ote = (e: React.TouchEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
		setTimeout(() => {
			target.style.backgroundColor = 'var(--bg_color)';
		}, 200);
	};

	const oc = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, onClick: Function) => {
		const target = e.currentTarget;
		target.style.backgroundColor = 'var(--hint20_color)';

		setTimeout(() => {
			target.style.backgroundColor = 'var(--bg_color)';
		}, 200);

		setTimeout(onClick, 300);
	};

	return (
		<div className="Menu">
			<div className="Menu_MenuCard">
				{menu.map((item, index) => (
					<React.Fragment key={index}>
						<div
							className={`Menu_MenuCardRow${item.selectable ? '-selectable' : ''}`}
							onTouchStart={e => ots(e)}
							onTouchEnd={e => ote(e)}
							onClick={e => oc(e, item.onClick)}
						>
							<div className="Menu_MenuCardRowIcon">
								<img src={item.icon} alt="" />
							</div>
							<div className="Menu_MenuCardRowContent">
								<div className="Menu_MenuCardRowContentText">{item.title}</div>
								<div className="Menu_MenuCardRowContentRight">
									<div className="Menu_MenuCardRowContentRightChevron">
										<BsChevronRight />
									</div>
								</div>
							</div>
						</div>
						{index !== menu.length - 1 && (
							<div className="Menu_MenuCardSeparatorWrapper">
								<div className="Menu_MenuCardSeparator" />
							</div>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Menu;
