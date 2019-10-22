import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const PREFIX_CLASS = 'article-list';

const propTypes = {
	history: PropTypes.object,
};

function ArticleList({ history, }) {
	const articleList = useSelector(state => state.articleList.get('articleList').toArray());

	function _handleRedirectArticle(articleId) {
		history.push(`/article/${articleId}`);
	}
	return (
		<div className={PREFIX_CLASS}>
			{
				articleList.map(item => (
					<div key={item.article_id} className={`${PREFIX_CLASS}__item`}>
						<p onClick={() => {_handleRedirectArticle(item.article_id);}}>
							{item.title}
						</p>
						<span>
							作者：{item.author}
						</span>
					</div>
				))
			}
		</div>
	);
}

ArticleList.propTypes = propTypes;

export default withRouter(props => <ArticleList {...props}/>);