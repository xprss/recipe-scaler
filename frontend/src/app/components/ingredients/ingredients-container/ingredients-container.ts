import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brain } from '../../../brain';
import { Ingredient } from '../ingredient/ingredient';

@Component({
  selector: 'app-ingredients-container',
  imports: [FormsModule, Ingredient],
  templateUrl: './ingredients-container.html',
  styleUrl: './ingredients-container.scss',
})
export class IngredientsContainer {
  constructor(protected brain: Brain) {}

}
