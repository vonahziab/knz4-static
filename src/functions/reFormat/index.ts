const reFormat = (number: number, separator: string = ' '): string => {
	const re = /(?=\B(?:\d{3})+(?!\d))/g;
	return (number || 0).toString().replace(re, separator);
};

export default reFormat;
