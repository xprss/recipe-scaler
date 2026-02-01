import { IngredientDTO } from '../dto/ingredient.dto';
import { Brain } from '../brain.ts';

export const copyTextToClipboard = (brain: Brain): void => {
  let text = '';
  const peopleLabel = brain.portions === 1 ? 'persona' : 'persone';
  text += `Ingredienti per ${brain.portions > 1 ? brain.portions : "una"} ${peopleLabel}:\n`;
  brain.ingredients.forEach((ingredient, index) => {
    text += `- ${ingredient.name}: ${ingredient.quantity * brain.getCoefficient()} ${ingredient.unit}`;
    if (index < brain.ingredients.length - 1) {
      text += '\n';
    }
  });
  navigator.clipboard.writeText(text);
};
