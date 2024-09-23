const getDaysFromDate = (ts: number): number => {
	const d = Math.round(new Date().getTime() / 1000.0) - ts;
	return (d - (d % 86400)) / 86400;
};

export default getDaysFromDate;
