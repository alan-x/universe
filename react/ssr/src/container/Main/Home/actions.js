import {GET_NEWS_LIST, SET_NEWS_LIST} from './constants';

export const getNewsAction = () => ({
	type: GET_NEWS_LIST
});

export const setNewsAction = (payload) => ({
	type: SET_NEWS_LIST,
	payload,
});
