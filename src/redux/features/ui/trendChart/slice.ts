import { createSlice } from '@reduxjs/toolkit';

import type { TrendDataObject } from '@/redux/features/ui/trendChart/types';
import type { PayloadAction } from '@reduxjs/toolkit';

import initialState from '@/redux/features/ui/trendChart/initialState';
import handleAsyncState from '@/redux/utilities/handleAsyncState';

const trendChartSlice = createSlice({
	name: 'trendChart',
	initialState,
	reducers: {
		resetMinimumEggs: state => {
			state.minimumEggsTrendData = [...initialState.minimumEggsTrendData];
		},
		resetLastFetchMinimumEggsTrendData: state => {
			state.lastFetchMinimumEggsTrendData =
				initialState.lastFetchMinimumEggsTrendData;
		},
		resetAdjustForInflation: state => {
			state.adjustForInflation = initialState.adjustForInflation;
		},
		setMinimumEggsTrendData: (
			state,
			action: PayloadAction<TrendDataObject[]>,
		) => {
			state.minimumEggsTrendData = action.payload;
		},
		setLastFetchMinimumEggsTrendData: (
			state,
			action: PayloadAction<string>,
		) => {
			state.lastFetchMinimumEggsTrendData = action.payload;
		},
		setAdjustForInflation: (state, action: PayloadAction<boolean>) => {
			state.adjustForInflation = action.payload;
		},
	},
	extraReducers: builder => {
		handleAsyncState({
			builder,
			thunk: fetchMinimumEggsTrendData,
			statusStateProperty: 'fetchMinimumEggsTrendDataStatus',
			onFulfilled(state, action: PayloadAction<TrendDataObject[]>) {
				state.minimumEggsTrendData = action.payload;
				state.lastFetchMinimumEggsTrendData = new Date().toISOString();
			},
		});
	},
});

export const {
	resetMinimumEggs,
	resetLastFetchMinimumEggsTrendData,
	resetAdjustForInflation,
	setMinimumEggsTrendData,
	setLastFetchMinimumEggsTrendData,
	setAdjustForInflation,
} = trendChartSlice.actions;

export default trendChartSlice.reducer;
