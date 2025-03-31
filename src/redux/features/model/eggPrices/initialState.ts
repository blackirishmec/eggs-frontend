import type { EggPricesState } from '@/redux/features/model/eggPrices/types';

import eggPricesAdapter from '@/redux/features/model/eggPrices/eggPricesAdapter';

const initialState: EggPricesState = eggPricesAdapter.getInitialState();

export default initialState;
