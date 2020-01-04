import {createStore, combineReducers, applyMiddleware} from 'redux';
import homeReducer from '../container/Main/Home/reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const reducers = combineReducers({
	home: homeReducer
});

const sagaMiddleware = createSagaMiddleware();

const getStore = (initialState = {}) => {
	const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(sagas);
	return store;
};


export default getStore;
