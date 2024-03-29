import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ahDataReducer from './reducers/ahDataReducer';
import filterReducer from './reducers/filterReducer';
import craftablesDataReducer from './reducers/craftablesDataReducer';
import professionsReducer from './reducers/professionsReducer';
import activeProfessionsReducer from './reducers/activeProfessionReducer';
import userReducer from './reducers/userReducer';
import craftingMaterialsReducer from './reducers/craftingMaterialsReducer';

const reducer = combineReducers({
  ahData: ahDataReducer,
  filter: filterReducer,
  craftablesData: craftablesDataReducer,
  professions: professionsReducer,
  activeProfession: activeProfessionsReducer,
  user: userReducer,
  showCraftingMaterials: craftingMaterialsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
