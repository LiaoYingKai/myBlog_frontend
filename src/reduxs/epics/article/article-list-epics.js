import { ofType, } from 'redux-observable';
import { api } from '../../../lib/API-utils';
import {
	map,
	mergeMap,
	catchError,
} from 'rxjs/operators';
import {
	START_FETCH_ARTICLE_LIST
} from '../../../actions/action-type';
import {
	fetchArticleListSuccess,
	fetchArticleListFail
} from '../../../actions/article-actions';

export function articleListEpic(action$) {
	return action$.pipe(
		ofType(START_FETCH_ARTICLE_LIST),
		mergeMap(action => (
			api('GET', 'article/list', action.data)
		).pipe(
			map(payload => payload.response),
			map(payload => fetchArticleListSuccess(payload.response)),
			catchError(payload => [
				fetchArticleListFail(payload.response.message)
			])
		))
	);
}
