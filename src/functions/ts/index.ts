import getTs from 'functions/getTs';

export const tsToDate = (
	ts: number,
	full: boolean = false,
	year = false,
	yearWordFull = true
): string => {
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

	return `${dd} ${mm_list[mm]}${year ? ' ' + yyyy + (yearWordFull ? ' года' : 'г.') : ''}`;
}; // +  1 мар. 2024г.

export const tsToMonth = (ts: number, full: boolean = false): string => {
	const d = new Date(ts * 1000);

	const mm = ('0' + (d.getMonth() + 1)).slice(-2);
	const mm_list: Record<string, string> = {
		'01': full ? 'Январь' : 'янв.',
		'02': full ? 'Февраль' : 'фев.',
		'03': full ? 'Март' : 'мар.',
		'04': full ? 'Апрель' : 'апр.',
		'05': full ? 'Май' : 'мая',
		'06': full ? 'Июнь' : 'июн.',
		'07': full ? 'Июль' : 'июл.',
		'08': full ? 'Август' : 'авг.',
		'09': full ? 'Сентябрь' : 'сен.',
		'10': full ? 'Октябрь' : 'окт.',
		'11': full ? 'Ноябрь' : 'ноя.',
		'12': full ? 'Декабрь' : 'дек.',
	};

	return `${mm_list[mm]}`;
}; // + Март

export const tsToHHMMSS = (ts: number) => {
	var date = new Date(ts * 1000);
	var hours = date.getHours();
	var minutes = '0' + date.getMinutes();
	var seconds = '0' + date.getSeconds();

	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

	return formattedTime;
}; // + 1:56:26

export function getTimeRemaining(endtime: number = 0) {
	var t = (endtime - getTs()) * 1000;
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		total: t,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};
}

export const tsToHHMM = (ts: number) => {
	var date = new Date(ts * 1000);
	var hours = date.getHours();
	var minutes = '0' + date.getMinutes();
	var formattedTime = hours + ':' + minutes.substr(-2);
	return formattedTime;
}; // + 2:02
