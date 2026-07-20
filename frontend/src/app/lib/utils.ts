import { Brain } from '../brain';
import { TranslateService } from '@ngx-translate/core';

export const copyTextToClipboard = (brain: Brain, translate: TranslateService): void => {
  let text = translate.instant('copy_recipe_ingredients', { count: brain.portions });
  brain.ingredients.forEach((ingredient, index) => {
    const unit = ingredient.unit?.trim();
    const amount =
      typeof ingredient.quantity === 'number'
        ? [ingredient.quantity * brain.getCoefficient(), unit].filter(Boolean).join(' ')
        : unit;
    text += amount ? `- ${ingredient.name}: ${amount}` : `- ${ingredient.name}`;
    if (index < brain.ingredients.length - 1) {
      text += '\n';
    }
  });
  navigator.clipboard.writeText(text);
};
