import React from 'react';
import { NavLink, } from 'react-router-dom';
import { PathEnums } from '../../route/config';
import './style.scss';

const {
	HOME,
	LOGIN,
	REGISTER,
	USER_EDIT,
} = PathEnums;

function LayoutHeader() {
	return (
		<header className="header">
			<div className="header__content">
				<ul>
					<li>
						<NavLink exact to={HOME} activeClassName="activeLink">首頁</NavLink>
					</li>
					<li>
						<NavLink to="/Contact" activeClassName="activeLink">Contact</NavLink>
					</li>
				</ul>
				<div className="header__user">
					<NavLink exact to={LOGIN}>登入</NavLink>
					<NavLink exact to={REGISTER}>註冊</NavLink>
					{/* <NavLink to={USER_EDIT} activeClassName="activeLink">資訊</NavLink> */}
				</div>
			</div>
		</header>
	);
}

export default LayoutHeader;
