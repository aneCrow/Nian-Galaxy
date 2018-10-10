import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const initState = ['Use Redux'];
const store = createStore(
    reducers,{},
    applyMiddleware(
        thunk,
        promiseMiddleware
    )
);
export default store;