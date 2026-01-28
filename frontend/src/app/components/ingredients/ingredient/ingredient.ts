import { Component, Input } from '@angular/core';
import { Brain } from '../../../brain';
import { ButtonModule } from 'primeng/button';
import { IngredientDTO } from '../../../dto/ingredient.dto';

@Component({
  selector: 'app-ingredient',
  imports: [ButtonModule],
  styleUrl: './ingredient.scss',
  templateUrl: './ingredient.html',
})
export class Ingredient {
  @Input() public index: number = 0;
  @Input() public ingredient: IngredientDTO = new IngredientDTO();
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
