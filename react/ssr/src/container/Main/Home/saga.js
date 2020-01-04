import {takeEvery, call, put} from 'redux-saga/effects';
import {GET_NEWS_LIST} from './constants';
import NewsService from '../../../service/NewsService';
import {setNewsAction} from './actions';

function* getNewsList() {
	try {
		const newsList = yield call(NewsService.list);
		yield put(setNewsAction(newsList.data));
	} catch (e) {
		console.error(e);
	}
}

export default function* main() {
	yield takeEvery(GET_NEWS_LIST, getNewsList);
}
