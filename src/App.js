import React from 'react';
import TRAlert from './components/TRAlert/TRAlert';
import useAlert from './components/TRAlert/hooks/useAlert';

const App = () => {
	const showAlert = useAlert()[1];
	return (
		<div className="container">
			<button
				onClick={() =>
					showAlert(
						'Test 2',
						'Test Alert Type',
						'Test Heading from app component'
					)
				}
			>
				Show Alert
			</button>
			<TRAlert />
		</div>
	);
};

export default App;
