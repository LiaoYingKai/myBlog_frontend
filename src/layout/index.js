import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import LayoutRouter from '../route';
import LayoutHeader from '../features/layout-header';
import RedirectNotify from '../features/redirect-notify';
import './style.scss';

function Layout() {
	return (
		<Router>
			<LayoutHeader/>
			<div className="home-page__content">
				<LayoutRouter/>
			</div>
			<RedirectNotify/>
		</Router>
	);
}

export default Layout;