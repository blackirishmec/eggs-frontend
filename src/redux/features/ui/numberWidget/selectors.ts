import type { RootState } from '@/redux/store';

import createStatusSelectors from '@/redux/utilities/createStatusSelectors';

export const numberWidgetStatusSelectors = createStatusSelectors(
	'numberWidget',
	(state: RootState) => state.numberWidget.fetchCurrentMinimumEggsStatus,
);

export const selectCurrentMinimumEggs = (
	state: RootState,
): number | undefined => state.numberWidget.currentMinimumEggs;

export const selectLastFetchCurrentMinimumEggs = (
	state: RootState,
): null | string => state.numberWidget.lastFetchCurrentMinimumEggs;
