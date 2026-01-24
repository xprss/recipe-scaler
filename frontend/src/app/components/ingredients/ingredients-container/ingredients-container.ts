import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brain } from '../../../brain';
import { Ingredient } from '../ingredient/ingredient';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ingredients-container',
  imports: [FormsModule, Ingredient, TableModule],
  templateUrl: './ingredients-container.html',
  styleUrl: './ingredients-container.scss',
})
export class IngredientsContainer {
  constructor(protected brain: Brain) {}
}
