import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import type { ErrorState, LoadingState, StatusState } from '@/types/status';

import nameSelectors from '@/redux/utilities/nameSelectors';

// Define the valid keys of selectors
type StatusSelectors = {
	error: (state: RootState) => ErrorState;
	loading: (state: RootState) => LoadingState;
	loadingHasSucceeded: (state: RootState) => boolean;
	loadingHasFailed: (state: RootState) => boolean;
	loadingIsActive: (state: RootState) => boolean;
	loadingIsIdle: (state: RootState) => boolean;
};

// Main function to create status selectors
const createStatusSelectors = <Prefix extends string>(
	prefix: Prefix,
	statusSelector: (state: RootState) => StatusState,
) => {
	const selectors: StatusSelectors = {
		error: createSelector(statusSelector, status => status.error),
		loading: createSelector(statusSelector, status => status.loading),
		loadingHasSucceeded: createSelector(
			statusSelector,
			status => status.loading === 'succeeded',
		),
		loadingHasFailed: createSelector(
			statusSelector,
			status => status.loading === 'failed',
		),
		loadingIsActive: createSelector(
			statusSelector,
			status => status.loading === 'loading',
		),
		loadingIsIdle: createSelector(
			statusSelector,
			status => status.loading === 'idle',
		),
	};

	return { ...nameSelectors(prefix, selectors), status: statusSelector };
};

export default createStatusSelectors;
