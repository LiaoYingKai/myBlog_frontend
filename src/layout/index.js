import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import LayoutRouter from '../route';
import LayoutHeader from '../components/layout-header';
import './style.scss';

function Layout() {
	return (
		<Router>
			<LayoutHeader/>
			<div className="home-page__content">
				<LayoutRouter/>
			</div>
		</Router>
	);
}

export default Layout;