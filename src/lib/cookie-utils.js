export function setCookie (name, value = '', days = 1) {
	const date = new Date();

	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = `${name}=${value}; expirse=${date.toUTCString()}; path=/`;
}

export function getCookie(name) {
	const cookies = document.cookie.split('; ');
	const cookie = cookies.filter(cookie => cookie.includes(name))[0];

	if (cookie) {
		return cookie.replace(`${name}=`, '');
	} else {
		return '';
	}
}

export function clearCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT ; path=/`;
}
