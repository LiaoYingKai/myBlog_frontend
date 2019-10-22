import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import { useSelector, } from 'react-redux';
import { LoadingStatusEnums } from '../../lib/enums';
import { PathEnums } from '../../route/config';
import { withRouter } from 'react-router-dom';
import Notify from '../../components/notify';

const propTypes = {
	history: PropTypes.object,
};

const {
	SUCCESS,
	FAILED,
} = LoadingStatusEnums;

const {
	HOME,
	LOGIN,
} = PathEnums;

const {
	TypeEnums
} = Notify;

function RedirectNotify({ history, }) {
	const [type, setType] = useState(TypeEnums.SUCCESS);
	const [isVisible, setVisible] = useState(false);
	const [text, setText] = useState(' ');

	const loginStatus = useSelector(state => state.user.toObject().loginStatus);
	const registerStatus = useSelector(state => state.user.toObject().createUserStatus);

	useEffect(() => {
		if (loginStatus === SUCCESS) {
			history.push(HOME);
			setNotify(TypeEnums.SUCCESS, '登入成功');
		}
		if (loginStatus === FAILED) {
			setNotify(TypeEnums.ERROR, '登入失敗');
		}
		
	}, [loginStatus]);

	useEffect(() => {
		if (registerStatus === SUCCESS) {
			history.push(LOGIN);
			setNotify(TypeEnums.SUCCESS, '註冊成功，請登入');
		}
		if (registerStatus === FAILED) {
			setNotify(TypeEnums.ERROR, '註冊失敗');
		}
	}, [registerStatus]);

	function setNotify(type, text) {
		setType(type);
		setText(text);
		_handleVisible();
	}

	function _handleVisible() {
		setVisible(true);

		setTimeout(() => {
			setVisible(false);
		}, 1000);
	}

	return (
		<Notify
			type={type}
			isVisible={isVisible}
			text={text}
		/>
	);
}

RedirectNotify.propTypes = propTypes;

export default withRouter(props => <RedirectNotify {...props}/>);
