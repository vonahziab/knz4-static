import getTs from 'functions/getTs';
import tsToTime from 'functions/tsToTime';

const clg = (...rest: any[]) => {
	console.log(`[${tsToTime(getTs())}]`, ...rest);
};

export default clg;
