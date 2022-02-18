import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ahDataReducer from './reducers/ahDataReducer';
import filterReducer from './reducers/filterReducer';
import craftablesDataReducer from './reducers/craftablesDataReducer';

const reducer = combineReducers({
  ahData: ahDataReducer,
  filter: filterReducer,
  craftablesData: craftablesDataReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
