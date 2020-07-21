import React from 'react';
import TRAlert from './components/TRAlert/TRAlert';
import useAlert from './components/TRAlert/hooks/useAlert';
import useConfig from './components/TRAlert/hooks/useConfig';

const App = () => {
	const { alertConfig, showAlert, closeAlert } = useConfig();
	return (
		<div className="container">
			{JSON.stringify(alertConfig)}
			<button onClick={() => showAlert('Test', 'Primary')}>Show Alert</button>
			<TRAlert />
		</div>
	);
};

export default App;
