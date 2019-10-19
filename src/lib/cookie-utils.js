export function setCookie (name, value = '', days = 1) {
	const date = new Date();

	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = `${name}=${value}; expirse=${date.toUTCString()}; path=/`;
}

export function getToken(name) {
	const cookies = document.cookie.split('; ');
	const cookie = cookies.filter(cookie => cookie.includes(name))[0]
		.replace(`${name}=`, '');

	return cookie;
}