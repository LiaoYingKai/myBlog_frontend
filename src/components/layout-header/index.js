import React from 'react';
import { NavLink, } from 'react-router-dom';
import './style.scss';

function LayoutHeader() {
	return (
		<header className="header">
			<div className="header__content">
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
					</li>
					<li>
						<NavLink to="/About" activeClassName="activeLink">About</NavLink>
					</li>
					<li>
						<NavLink to="/Contact" activeClassName="activeLink">Contact</NavLink>
					</li>
				</ul>
				<div className="header__user">
					<NavLink exact to="/login">登入</NavLink>
					<NavLink exact to="/register">註冊</NavLink>
				</div>
			</div>
		</header>
	);
}

export default LayoutHeader;
