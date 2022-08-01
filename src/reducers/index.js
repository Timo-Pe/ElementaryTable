import { combineReducers } from 'redux';

import periodicTableReducer from './periodicTable';
import elementReducer from './element';
import loaderReducer from './loader';

const rootReducer = combineReducers({
  periodicTable: periodicTableReducer,
  element: elementReducer,
  loader: loaderReducer,
});

export default rootReducer;