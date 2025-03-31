import { combineReducers } from '@reduxjs/toolkit';

import { eggPricesReducer } from '@/redux/features/model/eggPrices';
import { numberWidgetReducer } from '@/redux/features/ui/numberWidget';

// UI reducers - import the reducer directly from slice to avoid circular deps
// import authReducer from './features/ui/auth/slice';
// import { projectReviewsReducer } from './features/ui/projectReviews';

export const RESET_STORE = 'RESET_STORE';

export function resetStore() {
	return { type: RESET_STORE } as const;
}

const appReducer = combineReducers({
	// Model slices
	eggPrices: eggPricesReducer,

	numberWidget: numberWidgetReducer,
	// auth: authReducer,
	// userTeams: userTeamsReducer,
});

type AppReducerState = ReturnType<typeof appReducer>;

function rootReducer(
	state: AppReducerState | undefined,
	action: { type: string },
): AppReducerState {
	if (action.type === RESET_STORE) {
		return appReducer(undefined, action);
	}
	return appReducer(state, action);
}

export default rootReducer;
