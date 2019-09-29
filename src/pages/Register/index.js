import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/input';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import {
	startCreateUser
} from '../../actions/user-actions';
import './style.scss';

const {
	SOLID,
	HOLE,
} = Button.TypeEnums;

function Main() {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const dispatch = useDispatch();

	function startCreate() {
		return dispatch(startCreateUser({ account, password, user_name: userName }));
	}
	function _handleInitInputValue() {
		setAccount('');
		setPassword('');
		setUserName('');
	}

	function _handleSubmit() {
		console.log({ account: account, password: password, user_name: userName });
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
					onClick={startCreate}
					type={SOLID}
				/>
				<Button
					text={"取消"}
					onClick={_handleInitInputValue}
					type={HOLE}
				/>
			</div>
		</div>
	);
}

export default Main;
