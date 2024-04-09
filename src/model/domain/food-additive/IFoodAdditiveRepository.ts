import type { FoodAdditive } from "./FoodAdditive";

interface IFoodAdditiveRepository {
    getAll(): Promise<FoodAdditive[]>
}

export type { IFoodAdditiveRepository }