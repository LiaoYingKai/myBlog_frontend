import { ofType, } from 'redux-observable';
import { api } from '../../../lib/API-utils';
import {
	map,
	mergeMap,
	catchError,
} from 'rxjs/operators';
import {
	START_CREATE_USER,
	START_LOGIN,
} from '../../../actions/action-type';
import {
	createUserSuccess,
	createUserFail,
	loginSuccess,
	loginFail
} from '../../../actions/user-actions';

export function registerEpic(action$) {
	return action$.pipe(
		ofType(START_CREATE_USER),
		mergeMap(action => (
			api('POST', 'user/create', action.data)
		).pipe(
			map(payload => payload.response),
			map(response => createUserSuccess(response)),
			catchError(payload => [
				createUserFail(payload.response.message)
			])
		))
	);
}

export function loginEpic(action$) {
	return action$.pipe(
		ofType(START_LOGIN),
		mergeMap(action => (
			api('POST', 'user/login', action.data)
		).pipe(
			map(payload => loginSuccess(payload.response)),
			catchError(payload => [
				loginFail(payload.response.message)
			])
		))
	);
}
