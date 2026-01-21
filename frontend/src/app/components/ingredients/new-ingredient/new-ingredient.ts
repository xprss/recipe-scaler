import { Component } from '@angular/core';
import { Brain } from '../../../brain';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ingredient',
  imports: [FormsModule],
  templateUrl: './new-ingredient.html',
  styleUrl: './new-ingredient.scss',
})
export class NewIngredient {
  constructor(protected brain: Brain) {}
  addNewIngredient() {
    this.brain.addNewIngredient();
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addNewIngredient();
    }
  }
}
