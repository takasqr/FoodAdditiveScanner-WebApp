class FoodAdditiveApplicationService implements ApplicationService {

  private foodAdditiveRepository: IFoodAdditiveRepository
  
  constructor(foodAdditiveRepository: IContactRepository) {
    this.foodAdditiveRepository = foodAdditiveRepository
  }
}

export { FoodAdditiveApplicationService }
