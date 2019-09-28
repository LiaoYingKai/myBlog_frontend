import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/input';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import './style.scss';

const propTypes = {};

const {
	SOLID,
	HOLE,
} = Button.TypeEnums;

function Main() {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');

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
					onClick={() => {console.log("test")}}
					type={SOLID}
				/>
				<Button
					text={"取消"}
					onClick={() => {console.log("test")}}
					type={HOLE}
				/>
			</div>

		</div>
	);
}

Main.propTypes = propTypes;

export default Main;