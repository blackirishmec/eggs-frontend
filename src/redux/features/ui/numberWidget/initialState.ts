import type { NumberWidgetState } from '@/redux/features/ui/numberWidget/types';

import statusInitialState from '@/redux/initialStates/statusInitialState';

const initialState: NumberWidgetState = {
	fetchCurrentMinimumEggsStatus: { ...statusInitialState },
	currentMinimumEggs: undefined,
	lastFetchCurrentMinimumEggs: null,
};

export default initialState;
