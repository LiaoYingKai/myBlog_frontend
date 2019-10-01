import {
	START_CREATE_USER,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
	START_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from './action-type';

export function startCreateUser(data) {
	return {
		type: START_CREATE_USER,
		data
	};
}

export function createUserSuccess(payload) {
	return {
		type: CREATE_USER_SUCCESS,
		payload,
	};
}

export function createUserFail(error) {
	return {
		type: CREATE_USER_FAIL,
		error
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
