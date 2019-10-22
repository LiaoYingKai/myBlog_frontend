import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { startFetchArticle } from '../../actions/article-actions';
import './style.scss';

const PREFIX_CLASS = 'article';

const propTypes = {
	match: PropTypes.object,
};

function Article({ match }) {
	const { params } = match;
	const { id } = params;
	const dispatch = useDispatch();
	const article = useSelector(state => state.article.get('article').toObject()) || {}; 
	const {
		title,
		content,
		author,
		view_count,
		created,
	} = article;

	useEffect(() => {
		dispatch(startFetchArticle(id));
	}, [match.params.id]);

	function _handleTimeFormat() {
		const date = new Date(created);

		return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
	}

	return (
		<div className={PREFIX_CLASS}>
			<div className={`${PREFIX_CLASS}__headline`}>
				<p className={`${PREFIX_CLASS}__title`}>
					{title}
				</p>
				<div className={`${PREFIX_CLASS}__info`}>
					作者：{author} <br/>
					閱讀人數：{view_count}
				</div>
			</div>
			<div className={`${PREFIX_CLASS}__content`}>
				{content}
			</div>
			<div className={`${PREFIX_CLASS}__created`}>
				創建時間： {_handleTimeFormat()}
			</div>
		</div>
	);
}

Article.propTypes = propTypes;

export default Article;