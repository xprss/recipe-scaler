import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientDTO } from '../dto/ingredient.dto';

interface ParseRecipeResponse {
  ingredients: IngredientDTO[];
}

@Injectable({
  providedIn: 'root',
})
export class RecipeParserService {
  constructor(private readonly http: HttpClient) {}

  public parseRecipe(text: string): Observable<ParseRecipeResponse> {
    return this.http.post<ParseRecipeResponse>('/api/recipes/parse', { text });
  }
}
