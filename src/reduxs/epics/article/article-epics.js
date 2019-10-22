import { ofType, } from 'redux-observable';
import { api } from '../../../lib/API-utils';
import {
	map,
	mergeMap,
	catchError,
} from 'rxjs/operators';
import {
	START_FETCH_ARTICLE
} from '../../../actions/action-type';
import {
	fetchArticleSuccess,
	fetchArticleFail
} from '../../../actions/article-actions';

export function articleEpic(action$) {
	return action$.pipe(
		ofType(START_FETCH_ARTICLE),
		mergeMap(action => (
			api('GET', `article/${action.articleId}`)
		).pipe(
			map(payload => payload.response),
			map(payload => fetchArticleSuccess(payload.response)),
			catchError(payload => [
				fetchArticleFail(payload.response.message)
			])
		))
	);
}
