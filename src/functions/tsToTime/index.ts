const tsToTime = (ts: number) => {
	return new Date(ts * 1000).toLocaleTimeString();
};

export default tsToTime;
