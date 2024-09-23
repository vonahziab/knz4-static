import getTs from 'functions/getTs';

type TFCel = (from_ts: number, to_ts?: number, seconds?: number, limit?: number) => number;

// const cel = (a: number, b: number, c = 18) => (a - b - ((a - b) % c)) / c;

const cel: TFCel = (from_ts, to_ts = getTs(), seconds = 3600, limit = 0) => {
	let cel = (to_ts - from_ts - ((to_ts - from_ts) % seconds)) / seconds;
	if (limit > 0) {
		if (cel > limit) {
			cel = limit;
		}
	}

	return cel;
};

export default cel;
