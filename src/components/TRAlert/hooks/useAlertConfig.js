import { useState, useEffect } from 'react';

let alertConfig = { message: '', alertType: '', heading: '', show: false };
let listeners = [];

const useAlertConfig = () => {
	const setState = useState(alertConfig)[1];
	const showAlert = (message, alertType, heading) => {
		alertConfig = { message, alertType, heading, show: true };
		listeners.forEach((listener) => {
			listener(alertConfig);
		});
		console.log(alertConfig);
	};
	useEffect(() => {
		listeners.push(setState);
		return () => {
			listeners = listeners.filter((listener) => listener !== setState);
		};
	}, [setState]);
	return [alertConfig, showAlert];
};

export default useAlertConfig;
