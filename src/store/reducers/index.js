import { combineReducers } from 'redux';
import persistStore from './persistStore';
import client from './client.reducers';
import sale from './sale.reducers';
import material from './material.reducers';

const RootReducer = combineReducers({ persistStore, client, material, sale });

export default RootReducer;
