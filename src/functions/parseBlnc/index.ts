import reFormat from 'functions/reFormat';

const parseBlnc = (input: number, lim: number = 10e6): string | number => {
	if (!(input > lim)) {
		return reFormat(input || 0);
	}

	const count_char = String(input).length;
	const __ = (x: number, y: number, name: string): string =>
		String((Math.floor(input / x) * x) / y).replace('.', ',') + name;

	return (
		(count_char > 15 && __(1e14, 1e15, ' квдр.')) ||
		(count_char > 12 && __(1e11, 1e12, ' трлн.')) ||
		(count_char > 9 && __(1e8, 1e9, ' млрд.')) ||
		(count_char > 6 && __(10e5, 1e6, ' млн.')) ||
		(count_char > 3 && __(100, 1e3, ' тыс.')) ||
		input
	);
};

export default parseBlnc;
