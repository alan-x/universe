import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import ejs from 'ejs';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from '../container/App';
import template from './index.html';
import getStore from './../store/';
import routes, {findRoute} from './../config/route.config';

const app = express();

// TODO：路径需要处理一下
app.use('/public', express.static('/Users/lyxxxx/Own/demo/react/ssr/dist/client'));
app.use('/api', express.static('/Users/lyxxxx/Own/demo/react/ssr/mock'));


const createContent = (path, initialState) => ReactDomServer.renderToString(
	<Provider store={getStore(initialState)}>
		<StaticRouter location={path} context={{}}>
			<App/>
		</StaticRouter>
	</Provider>
);
app.get('/favicon', (req, res) => res.send('ok'));

app.get('/*', (req, res) => {
	const loadDataPromise = new Promise((resolve, reject) => {
		const route = findRoute(req.path);
		if (route && route.loadData) {
			route.loadData().then(res => resolve(res)).catch(e => reject(e));
		} else {
			resolve(undefined);
		}
	});
	loadDataPromise.then((initialState) => {
		res.send(
			ejs.render(template, {
				content: createContent(req.path, initialState),
				initialState: JSON.stringify(initialState)
			})
		);
	});

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
