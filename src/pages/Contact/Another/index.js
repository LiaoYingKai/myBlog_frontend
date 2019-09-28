import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	match: PropTypes.object
};

function Another({ match }) {
	return (
		<React.Fragment>
			Hello {match.params.another}
		</React.Fragment>
	);
}

Another.propTypes = propTypes;

export default Another;