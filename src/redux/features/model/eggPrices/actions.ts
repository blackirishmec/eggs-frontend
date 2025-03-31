import { createAction } from '@reduxjs/toolkit';

import type { EggPrice } from '@/interfaces/db_models/eggPriceModels';

export const eggPriceFetched = createAction<EggPrice>(
	'eggPrices/eggPriceFetched',
);

export const eggPricesFetched = createAction<EggPrice[]>(
	'eggPrices/eggPricesFetched',
);
