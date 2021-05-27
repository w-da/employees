import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);
