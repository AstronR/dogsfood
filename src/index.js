import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';//замена для отображения на gh-pages.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<HashRouter>
		<App />
	</HashRouter>

);

