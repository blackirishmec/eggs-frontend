export interface GetCurrentMinimumEggsResponse {
	/** Indicates if the request was successful */
	success: boolean;
	/** Error message if the request was not successful */
	message?: string;
	/** The current number of eggs equal to the current US Federal Nonfarm Minimum Wage, adjusted for inflation */
	result?: {
		minimumEggs: number;
	};
}
