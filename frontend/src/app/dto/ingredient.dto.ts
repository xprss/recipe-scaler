export class IngredientDTO {
  name?: string
  quantity?: number | null
  unit?: string | null

  constructor(name?: string, quantity?: number | null, unit?: string | null) {
    this.name = name || undefined
    this.quantity = quantity ?? undefined
    this.unit = unit ?? undefined
  }
}
