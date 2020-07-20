import React from 'react';
import PropTypes from 'prop-types';
import AlertContext from './alertContext';
const TRAlert = (props) => {
	return <AlertContext.Provider>{props.children}</AlertContext.Provider>;
};

TRAlert.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TRAlert;
