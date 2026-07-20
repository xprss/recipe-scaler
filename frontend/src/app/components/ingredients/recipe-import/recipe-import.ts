import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { finalize } from 'rxjs';
import { Brain } from '../../../brain';
import { RecipeParserService } from '../../../services/recipe-parser.service';

@Component({
  selector: 'app-recipe-import',
  imports: [FormsModule, ButtonModule, TranslateModule],
  templateUrl: './recipe-import.html',
  styleUrl: './recipe-import.scss',
})
export class RecipeImport {
  protected recipeText = '';
  protected isParsing = false;
  protected hasError = false;

  constructor(
    private readonly brain: Brain,
    private readonly recipeParserService: RecipeParserService,
  ) {}

  protected get canParse(): boolean {
    return this.recipeText.trim().length > 0 && !this.isParsing;
  }

  protected parseRecipe(): void {
    if (!this.canParse) {
      return;
    }

    this.hasError = false;
    this.isParsing = true;

    this.recipeParserService
      .parseRecipe(this.recipeText.trim())
      .pipe(finalize(() => (this.isParsing = false)))
      .subscribe({
        next: ({ ingredients }) => {
          this.brain.replaceIngredients(ingredients);
        },
        error: () => {
          this.hasError = true;
        },
      });
  }
}
