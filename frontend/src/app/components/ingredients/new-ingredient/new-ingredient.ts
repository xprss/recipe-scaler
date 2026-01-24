import { Component } from '@angular/core';
import { Brain } from '../../../brain';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-ingredient',
  imports: [FormsModule, ButtonModule, FloatLabelModule, InputTextModule],
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
