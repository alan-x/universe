import {matchPath} from 'react-router';
import Main from '../container/Main';
import Home from '../container/Main/Home';
import Mine from '../container/Main/Mine';
import NewsService from '../service/NewsService';
import {getNewsAction} from '../container/Main/Home/actions';

const routes = [{
	path: '/main',
	title: '首页',
	component: Main,
	children: [{
		path: '/main/home',
		component: Home,
		title: '主页',
		// TODO：需要解决这里处理很麻烦的问题
		loadData: () => new Promise((resolve, reject) =>
			NewsService.list().then((res) => resolve({
				home: {
					news: res.data
				}
			})))
	}, {
		path: '/main/mine',
		component: Mine,
		title: '个人中心',
	}]
}];

const wrapperFindRoute = (routes, path) => {
	if (Array.isArray(routes)) {
		for (const route of routes) {
			const result = wrapperFindRoute(route, path);
			if (result) return result;
		}
	} else {
		if (matchPath(path, {
			path: routes.path,
			exact: true,
			strict: false
		})) {
			return routes;
		} else if (Array.isArray(routes.children)) {
			return wrapperFindRoute(routes.children, path);
		}
	}
};

const findRoute = (path) => wrapperFindRoute(routes, path);

export {findRoute};

export default routes;
