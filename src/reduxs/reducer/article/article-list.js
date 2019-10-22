import { Map, List } from 'immutable';
import {
	START_FETCH_ARTICLE_LIST,
	FETCH_ARTICLE_LIST_SUCCESS,
	FETCH_ARTICLE_LIST_FAIL,
} from '../../../actions/action-type';
import { LoadingStatusEnums } from '../../../lib/enums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = Map({
	articleList: List(),
	loadingStatus: NONE,
	loadingErrorMessage: '',
});

export default function articleList(state = initState, action) {
	switch (action.type) {
		case START_FETCH_ARTICLE_LIST: {
			return state
				.set('loadingStatus', LOADING);
		}
		case FETCH_ARTICLE_LIST_SUCCESS: {
			return state
				.set('articleList', List(action.payload))
				.set('loadingStatus', SUCCESS);
		}
		case FETCH_ARTICLE_LIST_FAIL: {
			return state
				.set('loadingErrorMessage', action.error)
				.set('loadingStatus', FAILED);
		}
		default: {
			return state;
		}
	}
}
