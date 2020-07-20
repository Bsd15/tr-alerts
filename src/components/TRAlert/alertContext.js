import React from 'react';

const AlertContext = React.createContext({
	showAlert: () => {},
	showTemporaryAlert: () => {},
});

export default AlertContext;
