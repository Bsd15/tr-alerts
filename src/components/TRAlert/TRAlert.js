import React from 'react';
import AlertContext from './alertContext';
const TRAlert = (props) => {
	return <AlertContext.Provider>{props.children}</AlertContext.Provider>;
};

export default TRAlert;
