import { Brain } from '../brain';
import { TranslateService } from '@ngx-translate/core';

export const copyTextToClipboard = (brain: Brain, translate: TranslateService): void => {
  let text = translate.instant('copy_recipe_ingredients', { count: brain.portions });
  brain.ingredients.forEach((ingredient, index) => {
    text += `- ${ingredient.name}: ${(ingredient.quantity ?? 0) * brain.getCoefficient()} ${
      ingredient.unit
    }`;
    if (index < brain.ingredients.length - 1) {
      text += '\n';
    }
  });
  navigator.clipboard.writeText(text);
};
