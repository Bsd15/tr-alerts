import React from 'react';
import TRAlert from './components/TRAlert/TRAlert';
import useAlertConfig from './components/TRAlert/hooks/useAlertConfig';

const App = () => {
	const showAlert = useAlertConfig()[1];
	return (
		<div className="container">
			<button onClick={() => showAlert('Heading', 'Message', 'success')}>
				Show Alert
			</button>
			<TRAlert />
		</div>
	);
};

export default App;
