import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../rootReducer';

const history = createHistory();

const middlewares = [
    thunk,
    routerMiddleware(history),
    promiseMiddleware({
        promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILED'],
    }),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
/* eslint-enable */

export default store;
