import { ofType, } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
	map,
	mergeMap,
	catchError,
} from 'rxjs/operators';
import {
	START_CREATE_USER,
	START_LOGIN,
} from '../../actions/action-type';
import {
	createUserSuccess,
	createUserFail,
	loginSuccess,
	loginFail
} from '../../actions/user-actions';

const API_URL = 'http://localhost:8000';

export function registerEpics(action$) {
	return action$.pipe(
		ofType(START_CREATE_USER),
		mergeMap(action => (
			ajax({
				url: `${API_URL}/user/create`,
				method: 'POST',
				body: action.data
			})
		).pipe(
			map(payload => payload.response),
			map(response => createUserSuccess(response)),
			catchError(payload => [
				createUserFail(payload.response.message)
			])
		))
	);
}

export function loginEpics(action$) {
	return action$.pipe(
		ofType(START_LOGIN),
		mergeMap(action => (
			ajax({
				url: `${API_URL}/user/login`,
				method: 'POST',
				body: action.data
			})
		).pipe(
			map(payload => loginSuccess(payload.response)),
			catchError(payload => [
				loginFail(payload.response.message)
			])
		))
	);
}
