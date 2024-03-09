class FoodAdditive {

    readonly name: string

    readonly descriptionText: string
  
    readonly usage: string

    readonly type: string

    readonly keywords: string
  
    constructor({ name, descriptionText, usage, type, keywords }: { name: string, descriptionText: string, usage: string, type: string, keywords: string }) {
      this.name = name
      this.descriptionText = descriptionText
      this.usage = usage
      this.type = type
      this.keywords = keywords
    }
  }
  
  export { FoodAdditive };