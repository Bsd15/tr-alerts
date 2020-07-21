import React from 'react';
import TRAlert from './components/TRAlert/TRAlert';
import useAlert from './components/TRAlert/hooks/useAlert';
const App = () => {
	const showAlert = useAlert();
	return (
		<div className="container">
			<section className="grid grid-rows-4 gap-2 mx-auto w-1/3">
				<button
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
					onClick={() =>
						showAlert(
							'Alert!!',
							'This is the default type of alert.',
							'primary'
						)
					}
				>
					Show Primary Alert
				</button>
				<button
					className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
					onClick={() =>
						showAlert('Info!!', 'This is to indicate info type.', 'info')
					}
				>
					Show Info Alert
				</button>
				<button
					className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
					onClick={() =>
						showAlert(
							'Success!!',
							'This is to indicate success type',
							'success'
						)
					}
				>
					Show Success Alert
				</button>
				<button
					className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
					onClick={() =>
						showAlert(
							'Error!!',
							'This is to indicate danger or error type.',
							'danger'
						)
					}
				>
					Show Danger Alert
				</button>
			</section>
			<TRAlert />
		</div>
	);
};

export default App;
