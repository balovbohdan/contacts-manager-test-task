import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducers} from './reducers';

const middlewares = applyMiddleware(...[
    thunk
]);

const middlewaresComposed = composeWithDevTools(middlewares);

export const store = createStore(reducers, middlewaresComposed);