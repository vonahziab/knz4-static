import getTs from 'functions/getTs';
import toInt from 'functions/toInt';

const daysFromDate = (ts: number) => {
	const now = getTs();
	const dif = Math.abs(now - ts);

	return toInt(dif / (24 * 60 * 60));
};

export default daysFromDate;
