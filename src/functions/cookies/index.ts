function getCookie(name: string, json = false) {
	if (!name) {
		return undefined;
	}

	let matches = document.cookie.match(
		// eslint-disable-next-line
		new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)')
	);
	if (matches) {
		let res = decodeURIComponent(matches[1]);
		if (json) {
			try {
				return JSON.parse(res);
			} catch (e) {}
		}
		return res;
	}

	return undefined;
}
function setCookie(
	name: string,
	value: any,
	options: { expires?: any; path: string; [x: string]: any } = { path: '/' }
) {
	if (!name) {
		return;
	}

	options = options || {};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	if (value instanceof Object) {
		value = JSON.stringify(value);
	}
	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue;
		}
	}

	console.log(updatedCookie);
	document.cookie = updatedCookie;
}

function deleteCookie(name: string) {
	setCookie(name, 'deleted', {
		expires: new Date(Date.now()).toUTCString(),
		path: '/',
	});
}
// eslint-disable-next-line
export default {
	setCookie: setCookie,
	getCookie: getCookie,
	deleteCookie: deleteCookie,
};
