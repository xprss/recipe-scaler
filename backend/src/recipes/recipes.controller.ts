import { Body, Controller, Post } from '@nestjs/common';
import { IngredientDto } from './dto/ingredient.dto';
import { ParseRecipeDto } from './dto/parse-recipe.dto';
import { RecipesService } from './recipes.service';

interface ParseRecipeResponse {
  ingredients: IngredientDto[];
}

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post('parse')
  async parseRecipe(@Body() dto: ParseRecipeDto): Promise<ParseRecipeResponse> {
    const ingredients = await this.recipesService.parseIngredients(dto.text);
    return { ingredients };
  }
}
