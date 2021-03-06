import { useState, useEffect } from 'react';

let alertConfig = { heading: '', message: '', alertType: '', show: false };
let listeners = [];

const useAlertConfig = (shouldListen = true) => {
	const setState = useState(alertConfig)[1];
	const showAlert = (heading, message, alertType = 'primary', timeout = 0) => {
		alertConfig = { message, alertType, heading, show: true };
		listeners.forEach((listener) => {
			listener(alertConfig);
		});
		if (timeout) {
			setTimeout(() => {
				closeAlert();
			}, timeout);
		}
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
	}, [setState, shouldListen]);
	return [alertConfig, showAlert, closeAlert];
};

export default useAlertConfig;
