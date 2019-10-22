import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const TypeEnums = {
	SUCCESS: 'success',
	INFO: 'info',
	ERROR: 'error',
};

const propTypes = {
	type: PropTypes.oneOf(Object.values(TypeEnums)),
	text: PropTypes.string,
	isVisible: PropTypes.bool
};

const defaultProps = {
	type: TypeEnums.SUCCESS,
	text: '',
	isVisible: false
};

function Notify({ type, text, isVisible }) {
	return (
		<div className={cx('notify', `notify--${type}`, { 'notify--visible': isVisible })} >
			{text}
		</div>
	);
}

Notify.propTypes = propTypes;
Notify.defaultProps = defaultProps;
Notify.TypeEnums = TypeEnums;

export default Notify;
