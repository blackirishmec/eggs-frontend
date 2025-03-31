import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import initialState from '@/redux/features/ui/numberWidget/initialState';
import { fetchCurrentMinimumEggs } from '@/redux/features/ui/numberWidget/thunks';
import handleAsyncState from '@/redux/utilities/handleAsyncState';

const numberWidgetSlice = createSlice({
	name: 'numberWidget',
	initialState,
	reducers: {
		resetCurrentMinimumEggs: state => {
			state.currentMinimumEggs = initialState.currentMinimumEggs;
		},
		resetLastFetchCurrentMinimumEggs: state => {
			state.lastFetchCurrentMinimumEggs =
				initialState.lastFetchCurrentMinimumEggs;
		},
		setCurrentMinimumEggs: (state, action: PayloadAction<number>) => {
			state.currentMinimumEggs = action.payload;
		},
		setLastFetchCurrentMinimumEggs: (
			state,
			action: PayloadAction<string>,
		) => {
			state.lastFetchCurrentMinimumEggs = action.payload;
		},
	},
	extraReducers: builder => {
		handleAsyncState({
			builder,
			thunk: fetchCurrentMinimumEggs,
			statusStateProperty: 'fetchCurrentMinimumEggsStatus',
			onFulfilled(state, action) {
				state.currentMinimumEggs = action.payload;
				state.lastFetchCurrentMinimumEggs = new Date().toISOString();
			},
		});
	},
});

export const {
	resetCurrentMinimumEggs,
	setCurrentMinimumEggs,
	resetLastFetchCurrentMinimumEggs,
	setLastFetchCurrentMinimumEggs,
} = numberWidgetSlice.actions;

export default numberWidgetSlice.reducer;
