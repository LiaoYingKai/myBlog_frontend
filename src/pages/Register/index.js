import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropsTypes from 'prop-types';
import Input from '../../components/input';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import Noifty from '../../components/notify';
import { startCreateUser } from '../../actions/user-actions';
import { LoadingStatusEnums } from '../../lib/enums';
import './style.scss';
import Notify from '../../components/notify';

const propTypes = {
	history: PropsTypes.object,
};

const {
	SUCCESS,
	FAILED,
} = LoadingStatusEnums;

const {
	SOLID,
	HOLE,
} = Button.TypeEnums;

function RegisterPage({ history }) {
	const duration = 2 * 1000;
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [visible, setVidible] = useState(false);

	const createUserStatus = useSelector(state => state.user.get('createUserStatus'));
	const createFailedMessage = useSelector(state => state.user.get('createErrorMessage'));

	useEffect(() => {
		if (createUserStatus === SUCCESS) {
			history.push('/login');

		}
		if (createUserStatus === FAILED) {
			setVidible(true);
			setTimeout(() => {
				setVidible(false);
			}, duration);
		}
		
	},[createUserStatus]);

	const dispatch = useDispatch();

	function _startCreateUser() {
		return dispatch(startCreateUser({ account, password, user_name: userName }));
	}
	function _handleInitInputValue() {
		setAccount('');
		setPassword('');
		setUserName('');
	}

	function _handleSubmit() {
		_startCreateUser();
		_handleInitInputValue();
	}

	return (
		<div className="register__container">
			<div className="register__title">
				註冊
			</div>
			<TextInput
				text={"帳號："}
			>
				<Input
					placeholder={"請輸入帳號"}
					value={account}
					onChange={(event) => {setAccount(event.target.value);}}
				/>
			</TextInput>
			<TextInput
				text={"密碼："}
			>
				<Input
					placeholder={"請輸入密碼"}
					value={password}
					onChange={(event) => {setPassword(event.target.value);}}
				/>
			</TextInput>
			<TextInput
				text={"暱稱："}
			>
				<Input
					placeholder={"請輸入暱稱"}
					value={userName}
					onChange={(event) => {setUserName(event.target.value);}}
				/>
			</TextInput>
			<div className="register__button-group">
				<Button
					text={"註冊"}
					onClick={_handleSubmit}
					type={SOLID}
				/>
				<Button
					text={"取消"}
					onClick={_handleInitInputValue}
					type={HOLE}
				/>
			</div>
			<Noifty
				isVisible={visible}
				text={createFailedMessage}
				type={Notify.TypeEnums.ERROR}
			/>
		</div>
	);
}

RegisterPage.propTypes = propTypes;

export default RegisterPage;
