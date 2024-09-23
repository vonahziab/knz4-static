const parsePhone = (phone: string) => {
	const lengthPhone = phone.length;
	let _phone = phone.split('');
	if (lengthPhone === 12) {
		_phone.splice(2, 0, ' (');
		_phone.splice(6, 0, ') ');
		_phone.splice(10, 0, '-');
		_phone.splice(13, 0, '-');
	} else if (lengthPhone === 13) {
		_phone.splice(3, 0, ' (');
		_phone.splice(7, 0, ') ');
		_phone.splice(11, 0, '-');
		_phone.splice(14, 0, '-');
	}

	return _phone.join('');
};

export default parsePhone;
