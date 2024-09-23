const parseTimeDM = (ts: number, full: boolean = false, year = false): string => {
	const d = new Date(ts * 1000);

	const yyyy = d.getFullYear();
	const mm = ('0' + (d.getMonth() + 1)).slice(-2);
	const dd = +('0' + d.getDate()).slice(-2);
	const mm_list: Record<string, string> = {
		'01': full ? 'января' : 'янв.',
		'02': full ? 'февраля' : 'фев.',
		'03': full ? 'марта' : 'мар.',
		'04': full ? 'апреля' : 'апр.',
		'05': full ? 'мая' : 'мая',
		'06': full ? 'июня' : 'июн.',
		'07': full ? 'июля' : 'июл.',
		'08': full ? 'августа' : 'авг.',
		'09': full ? 'сентября' : 'сен.',
		'10': full ? 'октября' : 'окт.',
		'11': full ? 'ноября' : 'ноя.',
		'12': full ? 'декабря' : 'дек.',
	};

	return `${dd} ${mm_list[mm]}${year ? ' ' + yyyy + ' года' : ''}`;
};

export default parseTimeDM;
