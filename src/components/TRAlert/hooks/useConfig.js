import { useState, useCallback } from 'react';

export const useConfig = () => {
	const [show, setShow] = useState(false);
	const initAlertConfig = { message: '', alertType: '', heading: '' };
	const [alertConfig, setAlertConfig] = useState(initAlertConfig);

	const showAlert = useCallback((message, alertType, heading = '') => {
		if (message) {
			setAlertConfig({
				message: message,
				alertType: alertType,
				heading: heading,
			});
			setShow(true);
		}
	}, []);

	const hideAlert = useCallback(() => {
		setAlertConfig(initAlertConfig);
		setShow(false);
	}, [initAlertConfig]);

	return { show, alertConfig, showAlert, hideAlert };
};
