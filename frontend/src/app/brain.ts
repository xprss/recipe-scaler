import { Injectable } from '@angular/core';
import { IngredientDTO } from './ingredient.dto';

@Injectable({
  providedIn: 'root',
})
export class Brain {
  public portions: number = 2;
  public originalPortions: number = 2;
  public ingredients: IngredientDTO[] = [];
  public inputIngredient: IngredientDTO = { name: undefined, quantity: undefined, unit: undefined };
  
  constructor() {}

  public scaleUp(): void {
    this.portions += 1;
  }

  public scaleDown(): void {
    if (this.portions > 1) {
      this.portions -= 1;
    }
  }

  public addNewIngredient() {
    if (this.inputIngredient.name && (this.inputIngredient.quantity ?? 0) > 0 && this.inputIngredient.unit) {
      this.ingredients = [...this.ingredients, this.inputIngredient];
      this.inputIngredient = { name: undefined, quantity: undefined, unit: undefined };
    }
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
