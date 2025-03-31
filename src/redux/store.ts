import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// Define types for the store
export type RootState = ReturnType<typeof store.getState>; // Type for root state
export type AppDispatch = typeof store.dispatch; // Type for dispatch function
