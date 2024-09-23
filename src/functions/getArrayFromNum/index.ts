const getArrayFromNum = (arrOrNum?: number[] | number) => {
	return arrOrNum ? (typeof arrOrNum === 'number' ? [arrOrNum] : arrOrNum) : [];
};

export default getArrayFromNum;
