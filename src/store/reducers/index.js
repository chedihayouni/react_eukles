import { combineReducers } from 'redux';
import persistStore from './persistStore';
import todo from './todo.reducers';

const RootReducer = combineReducers({ persistStore, todo });

export default RootReducer;
