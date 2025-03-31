import type { RootState } from '@/redux/store';

import { isOverAnHourOld } from '@/utilities/isOverAnHourOld';

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

export const selectReadyToFetchCurrentMinimumEggs = (
	state: RootState,
): boolean => {
	if (state.numberWidget.lastFetchCurrentMinimumEggs === null) return true;

	return isOverAnHourOld(state.numberWidget.lastFetchCurrentMinimumEggs);
};
