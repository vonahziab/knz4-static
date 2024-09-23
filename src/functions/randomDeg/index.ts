const randomDeg = <T extends string | number>(drop: Record<T, number>): T | undefined => {
	const random = Math.random();
	let sum = 0;
	for (const i in drop) {
		sum += drop[i];
		if (random <= sum) return i;
	}

	return undefined;
};

export default randomDeg;

// + TEST 
// const result: Record<string | number, number> = {};

// new Array(100000).fill(undefined).forEach(i => {
// 	const res = randomDeg({
// 		'0.65%': 0.0065,
// 		'5%': 0.05,
// 		'15%': 0.15,
// 		'19%': 0.1935,
// 		'60%': 0.6,
// 	});
// 	if (!res) return;
// 	result[res] = (result[res] || 0) + 1 / 1000;
// });

// Object.entries(result).forEach(i => {
// 	document.write('<h1>' + i[0] + ' – ' + i[1].toFixed(2) + '</h2>');
// 	console.log(i[0] + ' – ' + i[1].toFixed(2));
// });
