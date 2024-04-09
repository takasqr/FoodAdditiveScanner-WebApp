import type { FoodAdditive } from "./FoodAdditive"
import type { IFoodAdditiveRepository } from "./IFoodAdditiveRepository"

class FoodAdditiveApplicationService implements ApplicationService {

  private foodAdditiveRepository: IFoodAdditiveRepository

  private foodAdditives: FoodAdditive[] 
  
  constructor(foodAdditiveRepository: IFoodAdditiveRepository) {
    this.foodAdditiveRepository = foodAdditiveRepository

    this.foodAdditives = []

    // 添加物リストを初期化
    this.initioalizeFoodAdditivesList()
  }

  // 初期化する
  initioalizeFoodAdditivesList() {

    this.foodAdditiveRepository.getAll()
  }
}

export { FoodAdditiveApplicationService }
