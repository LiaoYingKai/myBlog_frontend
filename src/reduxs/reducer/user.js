import { Map } from 'immutable';
import {
	START_CREATE_USER,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
	START_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../../actions/action-type';

const initState = Map({
	userData: {},
	createStatus: '',
	createErrorMessage: '',
	loginStatua: '',
	loginErrorMessage: '',
});

export default function todo(state = initState, action) {
	switch (action.type) {
		case START_CREATE_USER: {
			return state
				.set('createStatus', 'start');
		}
		case CREATE_USER_SUCCESS: {
			return state
				.set('createStatus', 'success');
		}
		case CREATE_USER_FAIL: {
			return state
				.set('createErrorMessage', action.error)
				.set('createStatus', 'fail');
		}
		case START_LOGIN: {
			return state
				.set('loginStatua', 'start');
		}
		case LOGIN_SUCCESS: {
			return state
				.set('loginStatua', 'start')
				.set('userData', action.data);
		}
		case LOGIN_FAIL: {
			return state
				.set('loginStatua', 'fail')
				.set('loginStatua', action.error);
		}
		default: {
			return state;
		}
	}
}