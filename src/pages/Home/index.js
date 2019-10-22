import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	startFetchArticleList,
} from '../../actions/article-actions';
import ArticleList from '../../features/article-list';
import PropTypes from 'prop-types';
import './style.scss';

const PREFIX_CLASS = 'home';

const propTypes = {};

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startFetchArticleList());
	}, []);

	return (
		<div className={PREFIX_CLASS}>
			<div className={`${PREFIX_CLASS}_content`}>
				<ArticleList/>
			</div>
			<div className={`${PREFIX_CLASS}_ranking`}>

			</div>
		</div>
	);
}

Home.propTypes = propTypes;

export default Home;