export * from '@/redux/features/model/eggPrices/types';
// export * from '@/redux/features/model/eggPrices/thunks';
export * from '@/redux/features/model/eggPrices/selectors';
export { default as eggPricesAdapter } from '@/redux/features/model/eggPrices/eggPricesAdapter';

export {
	addEggPrice,
	default as eggPricesReducer,
	removeAllEggPrices,
	removeEggPrice,
	upsertEggPrice,
	upsertManyEggPrices,
} from '@/redux/features/model/eggPrices/slice';
