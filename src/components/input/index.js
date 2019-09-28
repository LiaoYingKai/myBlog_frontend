import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	isError: PropTypes.bool,
	errorText: PropTypes.string,
	onChange: PropTypes.func,
};

function Input({ value, placeholder, isError, errorText, onChange, className, }) {
	return (
		<div className={cx(className,'input', { 'input--error': isError })}>
			<input
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
			{
				isError ? 
					<div className="input--error-text">{errorText}</div> : null
			}
		</div>
		
	);
}

Input.propTypes = propTypes;

export default Input;