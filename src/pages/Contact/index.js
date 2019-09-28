import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, } from 'react-router-dom';
import { RenderRoute } from '../../route/renderRoute';
import './style.scss';

const propTypes = {
	routes: PropTypes.array,
};

function Contact({ routes }) {
	return (
		<div className="contact">
			<ul>
				<li>
					<NavLink exact to="/contact/me">Me</NavLink>
				</li>
				<li>
					<NavLink to="/contact/he">He</NavLink>
				</li>
			</ul>
			{RenderRoute(routes)}
		</div>
	);
}

Contact.propTypes = propTypes;

export default Contact;