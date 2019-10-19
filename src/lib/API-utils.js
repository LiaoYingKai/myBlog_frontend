import { ajax } from 'rxjs/ajax';
import { getCookie } from './cookie-utils';

const API_URL = 'http://localhost:8000';

export function api(method, path, data) {
	return ajax({
		url: `${API_URL}/${path}`,
		method: method,
		headers: {
			Token: getCookie('userToken')
		},
		body: data
	});
}
