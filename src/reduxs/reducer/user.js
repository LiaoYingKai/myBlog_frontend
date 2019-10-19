import { Map } from 'immutable';
import {
	START_CREATE_USER,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
	START_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/enums';
import { setCookie, clearCookie } from '../../lib/cookie-utils';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = Map({
	userData: Map(),
	createUserStatus: NONE,
	createErrorMessage: '',
	loginStatua: NONE,
	loginErrorMessage: '',
});

export default function todo(state = initState, action) {
	switch (action.type) {
		case START_CREATE_USER: {
			return state
				.set('createUserStatus', LOADING);
		}
		case CREATE_USER_SUCCESS: {
			return state
				.set('createUserStatus', SUCCESS);
		}
		case CREATE_USER_FAIL: {
			return state
				.set('createErrorMessage', action.error)
				.set('createUserStatus', FAILED);
		}
		case START_LOGIN: {
			return state
				.set('loginStatua', LOADING);
		}
		case LOGIN_SUCCESS: {
			const { token, userData } = action.response.response;

			setCookie('userToken', token);

			return state
				.set('userData', Map(userData))
				.set('loginStatua', SUCCESS);
		}
		case LOGIN_FAIL: {
			return state
				.set('loginStatua', FAILED)
				.set('loginStatua', action.error);
		}
		case LOGOUT: {
			clearCookie('userToken');
			return state
				.set('userData', Map());
		}
		default: {
			return state;
		}
	}
}