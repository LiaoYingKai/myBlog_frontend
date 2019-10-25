import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, } from 'react-router-dom';
import { PathEnums } from '../../route/config';
import {
	logout
} from '../../actions/user-actions';
import './style.scss';

const {
	HOME,
	LOGIN,
	REGISTER,
	USER_EDIT,
	CREATE_ARTICLE,
} = PathEnums;

function LayoutHeader() {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.user.get('userData').toObject());
	const {
		account,
		user_name
	} = userData;
	const user = user_name || account;

	function _handelLogout() {
		return dispatch(logout());
	}

	function _renderUser() {
		if (user) {
			return (
				<React.Fragment>
					<NavLink to={USER_EDIT} activeClassName="activeLink">{user}</NavLink>
					<span onClick={_handelLogout}>登出</span>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<NavLink exact to={LOGIN}>登入</NavLink>
					<NavLink exact to={REGISTER}>註冊</NavLink>
				</React.Fragment>
			);
		}
	}
	
	return (
		<header className="header">
			<div className="header__content">
				<ul>
					<li>
						<NavLink exact to={HOME} activeClassName="activeLink">首頁</NavLink>
					</li>
					{
						user ? <li>
							<NavLink to={CREATE_ARTICLE} activeClassName="activeLink">建立文章</NavLink>
						</li> : null
					}
				</ul>
				<div className="header__user">
					{_renderUser()}
				</div>
			</div>
		</header>
	);
}

export default LayoutHeader;
