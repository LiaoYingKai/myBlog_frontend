//epic
import { combineEpics } from 'redux-observable';
import { 
	registerEpics,
	loginEpics,
} from './epics/user-epics';
//reducer
import { combineReducers } from 'redux';
import user from './reducer/user';

export const rootEpic = combineEpics(
	registerEpics,
	loginEpics,
);

export const rootReducer = combineReducers({
	user,
});
