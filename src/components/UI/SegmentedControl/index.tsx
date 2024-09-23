import { SetterOrUpdater } from 'recoil';
import './index.css';
type Props = {
	handleClick?: (item: string) => void;
	selectedTab: string;
	setSelectedTab: SetterOrUpdater<string>;
	tabs: {
		title: string;
		value: string;
	}[];
};

const SegmentedControl = ({ tabs, selectedTab, setSelectedTab, handleClick }: Props) => {
	return (
		<div className="SegmentedControl_Wrapper">
			{tabs.map((tab, index) => (
				<div
					key={index}
					className={`SegmentedControl_Wrapper_Tab${
						tab.value === selectedTab ? '-selected' : ''
					}`}
					onClick={() => {
						handleClick && handleClick(tab.value);
						setSelectedTab(tab.value);
					}}
				>
					<div className="SegmentedControl_Wrapper_Tab_Text">{tab.title}</div>
				</div>
			))}
		</div>
	);
};

export default SegmentedControl;
