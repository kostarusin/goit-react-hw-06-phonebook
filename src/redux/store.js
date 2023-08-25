import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contactsReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  contactsActions: contactsReducer,
});

const devTools = devToolsEnhancer();
export const store = createStore(rootReducer, devTools);
