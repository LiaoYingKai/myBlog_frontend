import { ofType, } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
	map,
	mergeMap,
	catchError,
} from 'rxjs/operators';
import {
	START_CREATE_USER,
} from '../../actions/action-type';
import {
	createUserSuccess,
	createUserFail
} from '../../actions/user-actions';

const API_URL = 'http://localhost:8000';

export function userEpics(action$) {
	return action$.pipe(
		ofType(START_CREATE_USER),
		mergeMap(action => (
			ajax({
				url: `${API_URL}/users/create`,
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
