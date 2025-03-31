import type { TrendChartState } from '@/redux/features/ui/trendChart/types';

import statusInitialState from '@/redux/initialStates/statusInitialState';

const initialState: TrendChartState = {
	fetchMinimumEggsTrendDataStatus: { ...statusInitialState },
	minimumEggsTrendData: [],
	lastFetchMinimumEggsTrendData: null,
	adjustForInflation: true,
};

export default initialState;
