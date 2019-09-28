import {
	START_CREATE_USER,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
	START_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from './action-type';

export function startCreateUser({ account, password, user_name }) {
	return {
		type: START_CREATE_USER,
		account,
		password,
		user_name,
	};
}

export function createUserSuccess(payload) {
	return {
		type: CREATE_USER_SUCCESS,
		payload,
	};
}

export function createUserFail() {
	return {
		type: CREATE_USER_FAIL
	};
}

export function startLogin({ account, password }) {
	return {
		type: START_LOGIN,
		account,
		password,
	};
}

export function LoginSuccess(data) {
	return {
		type: LOGIN_SUCCESS,
		data,
	};
}

export function LoginFail(error) {
	return {
		type: LOGIN_FAIL,
		error
	};
}
