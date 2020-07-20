import { useState } from 'react';

export const useConfig = () => {
	const [show, setShow] = useState(false);
	const initAlertConfig = { message: '', alertType: '', heading: '' };
	const [alertConfig, setAlertConfig] = useState(initAlertConfig);

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
		setAlertConfig(initAlertConfig);
		setShow(false);
	};

	return { show, alertConfig, showAlert, hideAlert };
};
