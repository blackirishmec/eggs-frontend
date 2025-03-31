import type { StatusState } from '@/types/status';

export interface NumberWidgetState {
	fetchCurrentMinimumEggsStatus: StatusState;
	currentMinimumEggs?: number;
}
