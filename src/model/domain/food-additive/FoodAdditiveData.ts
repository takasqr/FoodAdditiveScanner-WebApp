import type { FoodAdditive } from "./FoodAdditive"

class FoodAdditiveData implements DTO {

    readonly name: string

    readonly descriptionText: string
  
    readonly usage: string

    readonly type: string

    readonly keywords: string
  
    constructor(foodAdditive: FoodAdditive) {
      this.name = foodAdditive.name
      this.descriptionText = foodAdditive.descriptionText
      this.usage = foodAdditive.usage
      this.type = foodAdditive.type
      this.keywords = foodAdditive.keywords
    }
  }
  
  export { FoodAdditiveData };