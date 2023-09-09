import { combineReducers, configureStore } from '@reduxjs/toolkit';
import approvedPOReducer from './approvedPOSlice';
import poReducer from './poSlice';

const rootReducer = combineReducers({
	po: poReducer,
	approvedPO: approvedPOReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
