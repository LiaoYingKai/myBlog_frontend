import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	])
};

function TextInput({ text, children, className }) {
	return (
		<div className={cx("text-input",className)}>
			<p>{text}</p>
			<div className="text-input__content">
				{children}
			</div>
		</div>
	);
}

TextInput.propTypes = propTypes;

export default TextInput;