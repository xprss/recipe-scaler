export class IngredientDTO {
  name: string
  quantity: number
  unit: string

  constructor(name?: string, quantity?: number, unit?: string) {
    this.name = name || ''
    this.quantity = quantity || 0
    this.unit = unit || ''
  }
}