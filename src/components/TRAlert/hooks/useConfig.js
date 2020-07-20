import React, { useState } from 'react';

export const useConfig = () => {
	const [show, setShow] = useState(false);
	const [alertConfig, setAlertConfig] = useState({});

	const showAlert = (message, alertType, heading = '') => {
		if (message) {
			setAlertConfig({
				message: message,
				alertType: alertType,
				heading: heading,
			});
			setShow(true);
		}
	};

	const hideAlert = () => {
		setAlertConfig({});
		setShow(false);
	};

	return [show, alertConfig, showAlert, hideAlert];
};
