//epic
import { combineEpics } from 'redux-observable';
import { 
	registerEpic,
	loginEpic,
} from './epics/user/user-epics';
import { articleListEpic } from './epics/article/article-list-epics';
import { articleEpic } from './epics/article/article-epics';
//reducer
import { combineReducers } from 'redux';
import user from './reducer/user/user';
import articleList from './reducer/article/article-list';
import article from './reducer/article/article';

export const rootEpic = combineEpics(
	registerEpic,
	loginEpic,

	articleEpic,
	articleListEpic,
);

export const rootReducer = combineReducers({
	user,

	article,
	articleList,
});
