export * from '@/redux/features/ui/numberWidget/types';
export * from '@/redux/features/ui/numberWidget/thunks';
export * from '@/redux/features/ui/numberWidget/selectors';

export {
	default as numberWidgetReducer,
	resetCurrentMinimumEggs,
	setCurrentMinimumEggs,
} from '@/redux/features/ui/numberWidget/slice';
