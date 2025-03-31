import type { TrendDataObject } from '@/redux/features/ui/trendChart/types';
import type { RootState } from '@/redux/store';

import { isOverAnHourOld } from '@/utilities/isOverAnHourOld';

import createStatusSelectors from '@/redux/utilities/createStatusSelectors';

export const trendChartStatusSelectors = createStatusSelectors(
	'trendChart',
	(state: RootState) => state.trendChart.fetchMinimumEggsTrendDataStatus,
);

export const selectMinimumEggsTrendData = (
	state: RootState,
): TrendDataObject[] => state.trendChart.minimumEggsTrendData;

export const selectLastFetchMinimumEggsTrendData = (
	state: RootState,
): null | string => state.trendChart.lastFetchMinimumEggsTrendData;

export const selectReadyToFetchMinimumEggsTrendData = (
	state: RootState,
): boolean => {
	if (state.trendChart.lastFetchMinimumEggsTrendData === null) return true;

	return isOverAnHourOld(state.trendChart.lastFetchMinimumEggsTrendData);
};
