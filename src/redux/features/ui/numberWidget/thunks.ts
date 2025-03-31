import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import type { AppDispatch, RootState } from '@/redux/store';
import type { GetCurrentMinimumEggsResponse } from '@/redux/types/GetCurrentMinimumEggsResponse';
import type { AxiosResponse } from 'axios';

import { axiosInstance } from '@/main';

export const fetchCurrentMinimumEggs = createAsyncThunk<
	number,
	void,
	{ dispatch: AppDispatch; state: RootState }
>('numberWidget/fetchCurrentMinimumEggs', async (_, { rejectWithValue }) => {
	try {
		const response =
			await axiosInstance.get<
				AxiosResponse<GetCurrentMinimumEggsResponse>
			>(`/currentMinimumEggs`);

		if (response.data.data.result === undefined) {
			throw Error('fetchCurrentMinimumEggs thunk failed!');
		}

		return response.data.data.result.minimumEggs;
	} catch (error) {
		if (isAxiosError(error)) {
			return rejectWithValue(error.response?.data ?? error.message);
		}
		return rejectWithValue((error as Error).message);
	}
});
