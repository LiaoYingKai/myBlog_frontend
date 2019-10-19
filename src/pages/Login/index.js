import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/input';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import {
	startLogin
} from '../../actions/user-actions';
import './style.scss';

const {
	SOLID,
	HOLE,
} = Button.TypeEnums;

function LoginPage() {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	function _startCreateUser() {
		return dispatch(startLogin({ account, password }));
	}
	function _handleInitInputValue() {
		setAccount('');
		setPassword('');
	}

	function _handleSubmit() {
		_startCreateUser();
		_handleInitInputValue();
	}

	return (
		<div className="login__container">
			<div className="login__title">
				登入
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
			<div className="login__button-group">
				<Button
					text={"登入"}
					onClick={_handleSubmit}
					type={SOLID}
				/>
				<Button
					text={"忘記密碼"}
					onClick={_handleInitInputValue}
					type={HOLE}
				/>
			</div>
		</div>
	);
}

export default LoginPage;
