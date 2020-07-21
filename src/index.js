import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TRAlert from './components/TRAlert/TRAlert';
import useAlert from './components/TRAlert/hooks/useAlert';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
