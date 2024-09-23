import getTs from 'functions/getTs';

type TFGetParseDate = (ts: number) => string;

const getParseDate: TFGetParseDate = (ts = getTs()) => {
	const d = new Date(ts * 1000);
	const yyyy = d.getFullYear();
	const mm = ('0' + (d.getMonth() + 1)).slice(-2);
	const dd = ('0' + d.getDate()).slice(-2);
	// const yy = String(yyyy)[2]+String(yyyy)[3];

	return `${dd}.${mm}.${yyyy}`;
};

export default getParseDate;
