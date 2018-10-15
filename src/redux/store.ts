import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {initialState} from './initialState';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

// @ts-ignore
let storeRedux = createStore(reducer, initialState, applyMiddleware(thunk, promiseMiddleware));
export default storeRedux;