import { stocks } from './ducks/stocks';
import { createStore } from 'redux'

import { combineReducers } from 'redux'
const reducers = combineReducers({
  stocks,
});

const store = createStore(reducers)
export default store