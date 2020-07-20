import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TRAlert from './components/TRAlert/TRAlert';

ReactDOM.render(
	<React.StrictMode>
		<div className="container">
			Hello world
			<TRAlert />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
