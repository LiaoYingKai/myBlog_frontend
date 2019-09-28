import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const TypeEnums = {
	SOLID: 'solid',
	HOLE: 'hole',
};

const propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.oneOf(Object.values(TypeEnums)),
	onClick: PropTypes.func,
	isDisable: PropTypes.bool,
};

function Button({ text, type, onClick, className, isDisable,  }) {
	return (
		<button
			className={cx(className, 'button' ,`button--${type}`, { 'button--disabled': isDisable })}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

Button.propTypes = propTypes;
Button.TypeEnums = TypeEnums;

export default Button;