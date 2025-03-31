import type { EggPrice } from '@/interfaces/db_models/eggPriceModels';
import type { EntityState } from '@reduxjs/toolkit';

export type EggPricesState = EntityState<EggPrice, number>;
