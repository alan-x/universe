import {all} from 'redux-saga/effects';
import homeSaga from '../container/Main/Home/saga';

export default function* sagas() {
	try {
		yield all([
			homeSaga()
		]);
	} catch (e) {
		console.error(e);
	}
}
