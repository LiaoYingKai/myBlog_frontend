import { Map } from 'immutable';
import {
	START_FETCH_ARTICLE,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAIL,
} from '../../../actions/action-type';
import { LoadingStatusEnums } from '../../../lib/enums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = Map({
	article: Map(),
	loadingStatus: NONE,
	loadingErrorMessage: '',
});

export default function articleList(state = initState, action) {
	switch (action.type) {
		case START_FETCH_ARTICLE: {
			return state
				.set('loadingStatus', LOADING);
		}
		case FETCH_ARTICLE_SUCCESS: {
			return state
				.set('article', Map(action.payload))
				.set('loadingStatus', SUCCESS);
		}
		case FETCH_ARTICLE_FAIL: {
			return state
				.set('loadingErrorMessage', action.error)
				.set('loadingStatus', FAILED);
		}
		default: {
			return state;
		}
	}
}
