import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngredientDTO } from '../../../ingredient.dto';
import { Brain } from '../../../brain';

@Component({
  selector: 'app-ingredient',
  imports: [FormsModule],
  templateUrl: './ingredient.html',
  styleUrl: './ingredient.scss',
})
export class Ingredient {
  @Input() public index: number = 0;
  @Input() public ingredient: IngredientDTO = { name: '', quantity: 0, unit: '' };
  constructor(protected brain: Brain) {}

  public deleteIngredient() {
    this.brain.deleteIngredient(this.index);
  }

  public max(arg0: number, arg1: number): number {
    if (arg0 > arg1) {
      return arg0;
    }
    return arg1;
  }
}
