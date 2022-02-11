import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ahDataReducer from './reducers/ahDataReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  ahData: ahDataReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
