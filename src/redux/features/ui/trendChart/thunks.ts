import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import type { TrendDataObject } from '@/redux/features/ui/trendChart/types';
import type { AppDispatch, RootState } from '@/redux/store';
import type { GetMinimumEggsTrendDataResponse } from '@/redux/types/GetMinimumEggsTrendDataResponse';

import { axiosInstance } from '@/main';

export const fetchMinimumEggsTrendData = createAsyncThunk<
	TrendDataObject[],
	void,
	{ dispatch: AppDispatch; state: RootState }
>(
	'trendChart/fetchMinimumEggsTrendData',
	async (_, { getState, rejectWithValue }) => {
		try {
			const state = getState();
			const adjustForInflation = state.trendChart.adjustForInflation;

			const { data } =
				await axiosInstance.get<GetMinimumEggsTrendDataResponse>(
					`/minimum-eggs-trend-data?ADJUSTED=${adjustForInflation}`,
				);

			if (data.result === undefined) {
				throw Error('fetchMinimumEggsTrendData thunk failed!');
			}

			return data.result.minimumEggsTrendData;
		} catch (error) {
			if (isAxiosError(error)) {
				return rejectWithValue(error.response?.data ?? error.message);
			}
			return rejectWithValue((error as Error).message);
		}
	},
);
