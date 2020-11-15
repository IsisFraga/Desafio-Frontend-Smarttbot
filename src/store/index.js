import { stocks } from './ducks/stocks';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { combineReducers } from 'redux'
const reducers = combineReducers({
  stocks,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store