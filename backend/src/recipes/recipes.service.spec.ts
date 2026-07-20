import { BadGatewayException } from '@nestjs/common';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('returns normalized ingredients from Ollama JSON', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        message: {
          content: JSON.stringify({
            ingredients: [
              { name: ' flour ', quantity: 1.5, unit: ' cups ' },
              { name: 'salt', quantity: null, unit: null },
              { name: ' ', quantity: 1, unit: 'pinch' },
            ],
          }),
        },
      }),
    }) as jest.Mock;

    const service = new RecipesService();

    await expect(service.parseIngredients('1 1/2 cups flour')).resolves.toEqual([
      { name: 'flour', quantity: 1.5, unit: 'cups' },
      { name: 'salt', quantity: null, unit: null },
    ]);
  });

  it('throws a gateway error when Ollama is unavailable', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => 'load failed',
    }) as jest.Mock;

    const service = new RecipesService();

    await expect(service.parseIngredients('recipe')).rejects.toBeInstanceOf(BadGatewayException);
  });

  it('throws a gateway error for invalid JSON', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        message: {
          content: 'not-json',
        },
      }),
    }) as jest.Mock;

    const service = new RecipesService();

    await expect(service.parseIngredients('recipe')).rejects.toBeInstanceOf(BadGatewayException);
  });

  it('throws a gateway error when the Ollama request fails before a response', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('timeout')) as jest.Mock;

    const service = new RecipesService();

    await expect(service.parseIngredients('recipe')).rejects.toBeInstanceOf(BadGatewayException);
  });
});
