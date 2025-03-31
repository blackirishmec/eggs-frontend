import type { RootState } from '@/redux/store';

import eggPricesAdapter from '@/redux/features/model/eggPrices/eggPricesAdapter';

const selectEggPricesState = (state: RootState) => state.eggPrices;

export const {
	selectAll: selectAllEggPrices,
	selectById: selectEggPriceById,
	selectIds: selectEggPriceIds,
} = eggPricesAdapter.getSelectors(selectEggPricesState);
