import {
	START_FETCH_ARTICLE_LIST,
	FETCH_ARTICLE_LIST_SUCCESS,
	FETCH_ARTICLE_LIST_FAIL,
	START_FETCH_ARTICLE,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAIL,
} from './action-type';

export function startFetchArticleList() {
	return {
		type: START_FETCH_ARTICLE_LIST,
	};
}

export function fetchArticleListSuccess(payload = []) {
	return {
		type: FETCH_ARTICLE_LIST_SUCCESS,
		payload,
	};
}

export function fetchArticleListFail(error) {
	return {
		type: FETCH_ARTICLE_LIST_FAIL,
		error,
	};
}

export function startFetchArticle(articleId) {
	return {
		type: START_FETCH_ARTICLE,
		articleId,
	};
}

export function fetchArticleSuccess(payload) {
	return {
		type: FETCH_ARTICLE_SUCCESS,
		payload,
	};
}

export function fetchArticleFail(error) {
	return {
		type: FETCH_ARTICLE_FAIL,
		error,
	};
}