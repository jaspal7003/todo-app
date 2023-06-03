import { createStore, combineReducers } from 'redux';
import { drawerStatus } from './reducers/drawer';

const rootReducer = combineReducers({drawerStatus})

const store = createStore(rootReducer);

export default store;