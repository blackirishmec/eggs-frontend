import type { TrendDataObject } from '@/redux/features/ui/trendChart';

export interface GetMinimumEggsTrendDataResponse {
	/** Indicates if the request was successful */
	success: boolean;
	/** Error message if the request was not successful */
	message?: string;
	/** The data set of the trend of number of eggs equal to the current US Federal Nonfarm Minimum Wage, adjusted for inflation */
	result?: {
		minimumEggsTrendData: TrendDataObject[];
	};
}
