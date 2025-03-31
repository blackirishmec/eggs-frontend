import { createEntityAdapter } from '@reduxjs/toolkit';

import type { EggPrice } from '@/interfaces/db_models/eggPriceModels';

const eggPricesAdapter = createEntityAdapter<EggPrice, number>({
	selectId: eggPrice => eggPrice.id,
	sortComparer: false,
});

export default eggPricesAdapter;
