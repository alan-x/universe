import App from '../container/App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import getStore from '../store';

ReactDom.hydrate((
	<Provider store={getStore(window.__INITIAL_STATE__)}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
