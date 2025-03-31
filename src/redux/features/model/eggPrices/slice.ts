import { createSlice } from '@reduxjs/toolkit';

import type { EggPrice } from '@/interfaces/db_models/eggPriceModels';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
	eggPriceFetched,
	eggPricesFetched,
} from '@/redux/features/model/eggPrices/actions';
import eggPricesAdapter from '@/redux/features/model/eggPrices/eggPricesAdapter';
import initialState from '@/redux/features/model/eggPrices/initialState';

const eggPricesSlice = createSlice({
	name: 'eggPrices',
	initialState,
	reducers: {
		// Define any synchronous reducers here if needed
		addEggPrice: (state, action: PayloadAction<EggPrice>) => {
			eggPricesAdapter.addOne(state, action.payload);
		},
		upsertEggPrice: (state, action: PayloadAction<EggPrice>) => {
			eggPricesAdapter.upsertOne(state, action.payload);
		},
		removeEggPrice: (state, action: PayloadAction<number>) => {
			eggPricesAdapter.removeOne(state, action.payload);
		},
		upsertManyEggPrices: (state, action: PayloadAction<EggPrice[]>) => {
			eggPricesAdapter.upsertMany(state, action.payload);
		},
		removeAllEggPrices: state => {
			eggPricesAdapter.removeAll(state);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(eggPriceFetched, (state, { payload: eggPrice }) => {
				eggPricesAdapter.upsertOne(state, eggPrice);
			})
			.addCase(eggPricesFetched, (state, { payload: eggPrices }) => {
				eggPricesAdapter.upsertMany(state, eggPrices);
			});
	},
});

export const {
	addEggPrice,
	removeAllEggPrices,
	removeEggPrice,
	upsertManyEggPrices,
	upsertEggPrice,
} = eggPricesSlice.actions;

export default eggPricesSlice.reducer;
