import { Component, Input } from '@angular/core';
import { IngredientDTO } from '../../../ingredient.dto';
import { Brain } from '../../../brain';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ingredient',
  imports: [ButtonModule],
  template: `<tr>
    <td><p-button variant="text" severity="secondary" icon="pi pi-trash" (onClick)="this.deleteIngredient()"></p-button></td>
    <td>{{ ingredient.name }}</td>
    <td>{{ (ingredient.quantity! * brain.portions!) / max(brain.originalPortions, 1)! }}</td>
    <td>{{ ingredient.unit }}</td>
  </tr> `,
  host: { style: 'display: contents;' } 
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
