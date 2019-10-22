//epic
import { combineEpics } from 'redux-observable';
import { 
	registerEpic,
	loginEpic,
} from './epics/user-epics';
import {
	articleListEpic
} from './epics/article/article-list-epics';

//reducer
import { combineReducers } from 'redux';
import user from './reducer/user';
import articleList from './reducer/article/article-list';

export const rootEpic = combineEpics(
	registerEpic,
	loginEpic,

	articleListEpic,
);

export const rootReducer = combineReducers({
	user,

	articleList,
});
