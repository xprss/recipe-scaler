import { Injectable } from '@angular/core';
import { IngredientDTO } from './dto/ingredient.dto';

@Injectable({
  providedIn: 'root',
})
export class Brain {
  public portions: number = 2;
  public originalPortions: number = 2;
  public ingredients: IngredientDTO[] = [];
  public inputIngredient: IngredientDTO = new IngredientDTO();
  
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
      // Capitalize the ingredient name
      this.inputIngredient.name = this.inputIngredient.name.charAt(0).toUpperCase() + this.inputIngredient.name.slice(1)
      this.ingredients = [...this.ingredients, this.inputIngredient];
      this.inputIngredient = new IngredientDTO();
    }
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  public deleteAllIngredients() {
    this.ingredients = [];
  }
}
