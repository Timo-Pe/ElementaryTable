import { combineReducers } from 'redux';

import periodicTableReducer from './periodicTable';
import elementReducer from './element';

const rootReducer = combineReducers({
  periodicTable: periodicTableReducer,
  element: elementReducer,
});

export default rootReducer;