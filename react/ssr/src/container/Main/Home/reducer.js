import {SET_NEWS_LIST} from './constants';

const initState = {
	news: []
};

function reducer(state = initState, action) {
	switch (action.type) {
	case SET_NEWS_LIST: {
		return {
			news: action.payload
		};
	}
	default: {
		return state;
	}
	}
}

export default reducer;
