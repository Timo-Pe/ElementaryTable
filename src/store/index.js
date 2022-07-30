import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'src/reducers';
import elementsMiddleware from '../middlewares/elementsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    elementsMiddleware
  ),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;