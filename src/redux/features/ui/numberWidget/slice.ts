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
		setCurrentMinimumEggs: (state, action: PayloadAction<number>) => {
			state.currentMinimumEggs = action.payload;
		},
	},
	extraReducers: builder => {
		handleAsyncState({
			builder,
			thunk: fetchCurrentMinimumEggs,
			statusStateProperty: 'fetchCurrentMinimumEggsStatus',
			onFulfilled(state, action) {
				state.currentMinimumEggs = action.payload;
			},
		});
	},
});

export const { resetCurrentMinimumEggs, setCurrentMinimumEggs } =
	numberWidgetSlice.actions;

export default numberWidgetSlice.reducer;
