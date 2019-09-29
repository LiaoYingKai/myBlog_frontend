import { ofType, } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
	map,
	mergeMap,
} from 'rxjs/operators';
import {
	START_CREATE_USER,
} from '../../actions/action-type';
import {
	createUserSuccess
} from '../../actions/user-actions';


export function userEpics(action$) {
	return action$.pipe(
		ofType(START_CREATE_USER),
		mergeMap(action => (
			ajax('http://localhost:8000/users')
		).pipe(
			map(payload => {
				console.log(payload.response);
				console.log(action)
				return createUserSuccess(payload.response);
			})
		))
	);
}
