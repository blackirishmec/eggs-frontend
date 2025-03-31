export * from '@/redux/features/ui/numberWidget/types';
export * from '@/redux/features/ui/numberWidget/thunks';
export * from '@/redux/features/ui/numberWidget/selectors';

export {
	default as numberWidgetReducer,
	resetCurrentMinimumEggs,
	resetLastFetchCurrentMinimumEggs,
	setCurrentMinimumEggs,
	setLastFetchCurrentMinimumEggs,
} from '@/redux/features/ui/numberWidget/slice';
