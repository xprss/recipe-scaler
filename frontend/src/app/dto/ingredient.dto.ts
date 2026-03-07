export class IngredientDTO {
  name?: string
  quantity?: number
  unit?: string

  constructor(name?: string, quantity?: number, unit?: string) {
    this.name = name || undefined
    this.quantity = quantity || undefined
    this.unit = unit || undefined
  }
}