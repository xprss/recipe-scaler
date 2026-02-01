import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brain } from '../../../brain';
import { Ingredient } from '../ingredient/ingredient';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { copyTextToClipboard } from '../../../lib/utils';

@Component({
  selector: 'app-ingredients-container',
  imports: [FormsModule, Ingredient, TableModule, Button],
  templateUrl: './ingredients-container.html',
  styleUrl: './ingredients-container.scss',
})
export class IngredientsContainer {
  constructor(protected brain: Brain) {}

  public copyIngredientsToClipboard(): void {
    copyTextToClipboard(this.brain);
  }

  public deleteAllIngredients(): void {
    this.brain.deleteAllIngredients();
  }
}
