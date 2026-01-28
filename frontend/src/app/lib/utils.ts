import { IngredientDTO } from '../dto/ingredient.dto';

export const copyTextToClipboard = (ingredients: IngredientDTO[], portions: number, originalPortions: number): void => {
  let text = '';
  const peopleLabel = portions === 1 ? 'persona' : 'persone';
  text += `Ingredienti per ${portions > 1 ? portions : "una"} ${peopleLabel}:\n`;
  ingredients.forEach((ingredient, index) => {
    text += `- ${ingredient.name}: ${ingredient.quantity * portions / originalPortions} ${ingredient.unit}`;
    if (index < ingredients.length - 1) {
      text += '\n';
    }
  });
  navigator.clipboard.writeText(text);
};
