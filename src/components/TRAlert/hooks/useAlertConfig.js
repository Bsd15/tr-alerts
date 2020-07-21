import { useState, useEffect } from 'react';

let alertConfig = { heading: '', message: '', alertType: '', show: false };
let listeners = [];

const useAlertConfig = (shouldListen = true) => {
	const setState = useState(alertConfig)[1];
	const showAlert = (heading, message, alertType = 'primary') => {
		alertConfig = { message, alertType, heading, show: true };
		listeners.forEach((listener) => {
			listener(alertConfig);
		});
	};
	const closeAlert = () => {
		alertConfig = { heading: '', message: '', alertType: '', show: false };
		listeners.forEach((listener) => {
			listener(alertConfig);
		});
	};
	useEffect(() => {
		if (shouldListen) {
			listeners.push(setState);
		}
		return () => {
			if (shouldListen) {
				listeners = listeners.filter((listener) => listener !== setState);
			}
		};
	}, [setState]);
	return [alertConfig, showAlert, closeAlert];
};

export default useAlertConfig;
