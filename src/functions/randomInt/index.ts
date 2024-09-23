type TFRandomInt = (min?: number, max?: number) => number

const randomInt: TFRandomInt = (min = 0, max = 1000000) => {

	min = Math.ceil(min);
	max = Math.floor(max) + 1;
	return Math.floor(Math.random() * (max - min)) + min; // Максимум включается, минимум включается

}

export default randomInt;