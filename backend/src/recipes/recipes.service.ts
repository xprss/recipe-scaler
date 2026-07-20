import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { IngredientDto } from './dto/ingredient.dto';

interface OllamaChatResponse {
  message?: {
    content?: string;
  };
}

interface ParsedRecipe {
  ingredients?: unknown;
}

@Injectable()
export class RecipesService {
  private readonly logger = new Logger(RecipesService.name);
  private readonly ollamaBaseUrl = process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434';
  private readonly ollamaModel = process.env.OLLAMA_MODEL ?? 'qwen2.5:0.5b';

  async parseIngredients(recipeText: string): Promise<IngredientDto[]> {
    const response = await this.requestOllama(recipeText);

    if (!response.ok) {
      const errorBody = await response.text();
      this.logger.error(
        `Ollama parser request failed with status ${response.status}: ${errorBody}`,
      );
      throw new BadGatewayException('The local recipe parser is unavailable.');
    }

    const payload = (await response.json()) as OllamaChatResponse;
    const content = payload.message?.content;

    if (!content) {
      throw new BadGatewayException('The local recipe parser returned an empty response.');
    }

    return this.normalizeIngredients(this.parseModelContent(content));
  }

  private async requestOllama(recipeText: string): Promise<Response> {
    try {
      return await fetch(`${this.ollamaBaseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(120000),
        body: JSON.stringify({
          model: this.ollamaModel,
          stream: false,
          format: 'json',
          options: {
            temperature: 0,
            num_ctx: 1024,
            num_predict: 256,
          },
          messages: [
            {
              role: 'system',
              content: [
                'Extract only ingredients from recipes.',
                'Reply with valid JSON only.',
                'The JSON shape must be exactly:',
                '{"ingredients":[{"name":"flour","quantity":2,"unit":"cups"}]}',
                'Use decimal numbers for fractions.',
                'Use null for quantity or unit when missing.',
                'Do not include title, steps, servings, notes, or markdown.',
              ].join(' '),
            },
            {
              role: 'user',
              content: recipeText,
            },
          ],
        }),
      });
    } catch (error) {
      this.logger.error(`Ollama parser request failed before a response: ${String(error)}`);
      throw new BadGatewayException('The local recipe parser timed out.');
    }
  }

  private parseModelContent(content: string): ParsedRecipe {
    try {
      return JSON.parse(content) as ParsedRecipe;
    } catch {
      throw new BadGatewayException('The local recipe parser returned invalid JSON.');
    }
  }

  private normalizeIngredients(parsedRecipe: ParsedRecipe): IngredientDto[] {
    if (!Array.isArray(parsedRecipe.ingredients)) {
      throw new BadGatewayException('The local recipe parser returned an invalid ingredient list.');
    }

    return parsedRecipe.ingredients.flatMap((item): IngredientDto[] => {
      if (!this.isIngredientLike(item)) {
        return [];
      }

      const name = item.name.trim();
      if (!name) {
        return [];
      }

      return [
        {
          name,
          quantity: this.normalizeQuantity(item.quantity),
          unit: this.normalizeUnit(item.unit),
        },
      ];
    });
  }

  private isIngredientLike(item: unknown): item is Record<string, unknown> & { name: string } {
    return typeof item === 'object' && item !== null && typeof (item as { name?: unknown }).name === 'string';
  }

  private normalizeQuantity(quantity: unknown): number | null {
    if (typeof quantity !== 'number' || !Number.isFinite(quantity)) {
      return null;
    }

    return quantity;
  }

  private normalizeUnit(unit: unknown): string | null {
    if (typeof unit !== 'string') {
      return null;
    }

    const trimmedUnit = unit.trim();
    return trimmedUnit.length > 0 ? trimmedUnit : null;
  }
}
