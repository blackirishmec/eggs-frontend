import type { StatusState } from '@/types/status';

export type TrendDataObject = {
	date: string;
	value: number;
};

export interface TrendChartState {
	fetchMinimumEggsTrendDataStatus: StatusState;
	minimumEggsTrendData: TrendDataObject[];
	lastFetchMinimumEggsTrendData: null | string;
	adjustForInflation: boolean;
}
