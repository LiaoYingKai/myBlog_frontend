//epic
import { combineEpics } from 'redux-observable';
import { userEpics } from './epics/user-epics';
//reducer
import { combineReducers } from 'redux';
import user from './reducer/user';

export const rootEpic = combineEpics(
	userEpics,
);

export const rootReducer = combineReducers({
	user,
});
